import mongoose, { Document, Schema } from 'mongoose';

// MongoDB connection configuration
const MONGODB_URI = process.env.DATABASE_URL || 'mongodb+srv://Planet-minii:qmbofu-13912i@cluster0.63ppmv1.mongodb.net/?appName=Cluster0';

if (!process.env.DATABASE_URL) {
  console.warn('⚠️  WARNING: DATABASE_URL not set in environment variables');
}

// MongoDB connection options
const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 30000, // Increased from 5000 to 30000
  socketTimeoutMS: 60000, // Increased from 45000 to 60000
  connectTimeoutMS: 30000
};

// Connect to MongoDB
export async function connectToMongoDB() {
  try {
    await mongoose.connect(MONGODB_URI, options);
    console.log('✅ MongoDB connected successfully');
    return mongoose.connection;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
}

// Disconnect from MongoDB
export async function disconnectFromMongoDB() {
  try {
    await mongoose.disconnect();
    console.log('✅ MongoDB disconnected successfully');
  } catch (error) {
    console.error('❌ MongoDB disconnection error:', error);
    throw error;
  }
}

// Get MongoDB connection status
export function getMongoConnectionStatus() {
  const states = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
  };
  
  const connectionState = mongoose.connection.readyState;
  return states[connectionState as keyof typeof states] || 'unknown';
}

// User schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: false,
    trim: true
  },
  address: {
    type: String,
    required: false,
    trim: true
  },
  joined: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  googleId: {
    type: String,
    required: false,
    unique: true,
    sparse: true
  },
  avatar: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

// User stats schema
const UserStatsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  totalOrders: {
    type: Number,
    default: 0,
    min: 0
  },
  wishlistItems: {
    type: Number,
    default: 0,
    min: 0
  },
  savedAddresses: {
    type: Number,
    default: 0,
    min: 0
  },
  paymentMethods: {
    type: Number,
    default: 0,
    min: 0
  }
}, {
  timestamps: true
});

// Create and export models
export const User = mongoose.model('User', UserSchema);
export const UserStats = mongoose.model('UserStats', UserStatsSchema);

// TypeScript interfaces
export interface IUser extends Document {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  joined?: string;
  location?: string;
}

export interface IUserStats extends Document {
  userId: typeof mongoose.Types.ObjectId;
  totalOrders: number;
  wishlistItems: number;
  savedAddresses: number;
  paymentMethods: number;
}

export default mongoose;
