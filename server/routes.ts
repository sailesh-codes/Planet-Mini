import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import authRoutes from "./routes/auth";
import { passport } from "./auth/google";
import jwt from 'jsonwebtoken';

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Initialize Passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Register auth routes
  app.use('/auth', authRoutes);
  app.use('/api/auth', authRoutes);
  
  // No database seeding needed - using real user data

  app.get('/api/products', async (req, res) => {
    try {
      const { category, search } = req.query;
      const allProducts = await storage.getProducts();
      
      let filtered = allProducts;
      if (category && typeof category === 'string') {
        filtered = filtered.filter(p => 
          p.category.toLowerCase() === category.toLowerCase() || 
          p.subcategory?.toLowerCase() === category.toLowerCase()
        );
      }
      if (search && typeof search === 'string') {
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(search.toLowerCase()) || 
          p.description.toLowerCase().includes(search.toLowerCase())
        );
      }
      
      res.json(filtered);
    } catch (err) {
      res.status(400).json({ message: "Invalid query parameters" });
    }
  });

  app.get('/api/products/:slug', async (req, res) => {
    const product = await storage.getProductBySlug(req.params.slug);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  });

  // Profile API endpoint
  app.get('/api/profile', async (req, res) => {
    try {
      // Get JWT token from cookie
      const token = req.cookies.jwt;
      
      if (!token) {
        return res.status(401).json({ message: 'No token provided' });
      }

      // Verify JWT token
      const jwtSecret = process.env.JWT_SECRET || 'fallback-jwt-secret-change-in-production';
      const decoded = jwt.verify(token, jwtSecret) as any;
      
      // Import User model
      const { User, UserStats } = await import('./models/Profile');
      
      // Find user by ID from JWT
      const user = await User.findById(decoded.userId).select('-googleId');
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Get or create user stats
      let userStats = await UserStats.findOne({ userId: user._id });
      if (!userStats) {
        userStats = new UserStats({
          userId: user._id,
          totalOrders: 0,
          wishlistItems: 0,
          savedAddresses: 0,
          paymentMethods: 0
        });
        await userStats.save();
      }

      // Return real user data from MongoDB
      const profileData = {
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone || 'Not provided',
          address: user.address || 'Not provided',
          joined: user.joined || 'N/A',
          location: user.location || 'Not specified'
        },
        stats: {
          totalOrders: userStats.totalOrders,
          wishlistItems: userStats.wishlistItems,
          savedAddresses: userStats.savedAddresses,
          paymentMethods: userStats.paymentMethods
        }
      };
      
      res.json(profileData);
    } catch (error) {
      console.error('Error fetching profile data:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Update profile API endpoint
  app.put('/api/profile', async (req, res) => {
    try {
      const { User, UserStats } = await import('./models/Profile');
      
      // Get JWT token from cookie
      const token = req.cookies.jwt;
      if (!token) {
        return res.status(401).json({ message: 'No token provided' });
      }

      const jwtSecret = process.env.JWT_SECRET || 'fallback-jwt-secret-change-in-production';
      const decoded = jwt.verify(token, jwtSecret) as any;
      
      // Find authenticated user
      let user = await User.findById(decoded.userId);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      // Update user data with request body (excluding name)
      const { phone, address, location } = req.body;
      
      // Don't allow name updates - only update other fields
      if (phone) user.phone = phone;
      if (address) user.address = address;
      if (location) user.location = location;
      
      await user.save();
      
      // Return updated user data
      const userStats = await UserStats.findOne({ userId: user._id }) || {
        totalOrders: 24,
        wishlistItems: 12,
        savedAddresses: 3,
        paymentMethods: 2
      };
      
      const updatedProfileData = {
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          joined: user.joined,
          location: user.location
        },
        stats: {
          totalOrders: userStats.totalOrders,
          wishlistItems: userStats.wishlistItems,
          savedAddresses: userStats.savedAddresses,
          paymentMethods: userStats.paymentMethods
        }
      };
      
      res.json(updatedProfileData);
    } catch (error) {
      console.error('Error updating profile data:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
