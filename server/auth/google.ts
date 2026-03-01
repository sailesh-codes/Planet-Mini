import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../models/Profile';
import jwt from 'jsonwebtoken';

// Function to configure Google OAuth Strategy
export function configureGoogleStrategy() {
  // Check if Google credentials are available
  const googleClientId = process.env.GOOGLE_CLIENT_ID;
  const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!googleClientId || !googleClientSecret) {
    console.warn('⚠️  Google OAuth credentials not found in environment variables');
    console.warn('   Please add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET to your .env file');
    console.warn('   Authentication will be disabled until credentials are provided');
    return false;
  }

  // Configure Google OAuth Strategy
  try {
    passport.use(new GoogleStrategy({
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: `http://localhost:5003/auth/google/callback`,
      scope: ['profile', 'email']
    }, async (accessToken, refreshToken, profile, done) => {
      try {
        console.log('🔍 Google OAuth profile data:', profile);
        console.log('📧 Email:', profile.emails?.[0]?.value);
        console.log('👤 Name:', profile.displayName);
        console.log('🆔 Google ID:', profile.id);
        
        const userEmail = profile.emails?.[0]?.value?.toLowerCase().trim();
        console.log('🔍 Normalized email:', userEmail);
        
        // Check if user already exists by email
        let user = await User.findOne({ email: userEmail });
        console.log('👤 Existing user found by email:', user ? 'YES' : 'NO');
        
        // Also check by Google ID to be extra safe
        if (!user) {
          const userByGoogleId = await User.findOne({ googleId: profile.id });
          console.log('👤 Existing user found by Google ID:', userByGoogleId ? 'YES' : 'NO');
          if (userByGoogleId) {
            user = userByGoogleId;
            console.log('🔄 Found user by Google ID, updating email to:', userEmail);
          }
        }
        
        if (!user) {
          // Create new user if doesn't exist
          console.log('🆕 Creating new user...');
          user = new User({
            name: profile.displayName,
            email: userEmail, // Use normalized email
            phone: '',
            address: '',
            joined: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            location: '',
            googleId: profile.id,
            avatar: profile.photos?.[0]?.value
          });
          await user.save();
          console.log('✅ New user saved to MongoDB');
        } else {
          // Update existing user with Google info
          console.log('🔄 Updating existing user...');
          user.googleId = profile.id;
          user.avatar = profile.photos?.[0]?.value;
          if (!user.name) user.name = profile.displayName;
          await user.save();
          console.log('✅ Existing user updated in MongoDB');
        }
        
        console.log('🎯 Returning user to callback:', user);
        return done(null, user);
      } catch (error) {
        console.error('❌ Google OAuth strategy error:', error);
        return done(error, undefined);
      }
    }));
    
    console.log('✅ Google OAuth strategy configured successfully');
    return true;
  } catch (error) {
    console.error('❌ Failed to configure Google OAuth strategy:', error);
    return false;
  }
}

// Try to configure immediately (for cases where env vars are already set)
configureGoogleStrategy();

// Generate JWT token
export const generateToken = (user: any) => {
  const jwtSecret = process.env.JWT_SECRET || 'fallback-jwt-secret-change-in-production';
  
  if (!process.env.JWT_SECRET) {
    console.warn('⚠️  JWT_SECRET not found in environment variables, using fallback');
  }
  
  return jwt.sign(
    { 
      userId: user._id, 
      id: user._id,
      email: user.email, 
      name: user.name,
      avatar: user.avatar 
    },
    jwtSecret,
    { expiresIn: '7d' }
  );
};

// Serialize user for session
passport.serializeUser((user: any, done) => {
  done(null, user._id);
});

// Deserialize user from session
passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export { passport };
