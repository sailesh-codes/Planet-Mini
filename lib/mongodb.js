import { MongoClient } from 'mongodb';

// Singleton pattern for MongoDB connection
let cachedClient = null;
let cachedDb = null;

if (!process.env.DATABASE_URL) {
  throw new Error('Please define the DATABASE_URL environment variable inside .env');
}

export async function connectToDatabase() {
  // If we already have a connection, return it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    // Create new MongoDB client
    const client = new MongoClient(process.env.DATABASE_URL);
    
    // Connect to the MongoDB server
    await client.connect();
    
    // Get the database
    const db = client.db('planetmini');
    
    // Cache the connection
    cachedClient = client;
    cachedDb = db;
    
    return { client, db };
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

// Helper function to close the connection (useful for testing)
export async function closeConnection() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
  }
}
