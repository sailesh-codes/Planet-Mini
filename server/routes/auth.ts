import express from 'express';
import { passport, generateToken } from '../auth/google';
import { User } from '../models/Profile';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Google OAuth login route
router.get('/google', (req, res, next) => {
  // Check if Google OAuth is configured dynamically
  const isGoogleAuthConfigured = !!(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);
  
  if (!isGoogleAuthConfigured) {
    return res.status(500).json({ 
      message: 'Google OAuth not configured. Please add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET to environment variables.' 
    });
  }
  passport.authenticate('google')(req, res, next);
});

// Google OAuth callback route
router.get('/google/callback', (req, res, next) => {
  console.log('🚀 Google OAuth callback hit!');
  console.log('🔍 Request URL:', req.originalUrl);
  console.log('🔍 Query params:', req.query);
  
  // Check if Google OAuth is configured dynamically
  const isGoogleAuthConfigured = !!(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);
  
  if (!isGoogleAuthConfigured) {
    console.log('❌ Google OAuth not configured in callback');
    return res.status(500).json({ 
      message: 'Google OAuth not configured. Please add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET to environment variables.' 
    });
  }
  
  passport.authenticate('google', { 
    failureRedirect: '/login',
    session: false 
  })(req, res, next);
}, async (req, res) => {
    try {
      const user = req.user as any;
      console.log('🔍 Google OAuth callback - User data:', user);
      
      // Generate JWT token
      const token = generateToken(user);
      console.log('🔑 JWT token generated');
      
      // Set JWT as HTTP-only cookie
      res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });
      console.log('🍪 JWT cookie set');
      
      // Redirect to profile page
      console.log('🔄 Redirecting to /profile');
      res.redirect('/profile');
    } catch (error) {
      console.error('❌ Error in Google callback:', error);
      res.redirect('/login?error=auth_failed');
    }
  }
);

// Get current user from JWT
router.get('/me', async (req, res) => {
  try {
    const token = req.cookies.jwt;
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    
    const jwtSecret = process.env.JWT_SECRET || 'fallback-jwt-secret-change-in-production';
    const decoded = jwt.verify(token, jwtSecret) as any;
    
    const user = await User.findById(decoded.id).select('-googleId');
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    
    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        joined: user.joined,
        location: user.location,
        avatar: user.avatar
      }
    });
  } catch (error) {
    console.error('Error in /me route:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
});

// Logout route
router.post('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.json({ message: 'Logged out successfully' });
});

export default router;
