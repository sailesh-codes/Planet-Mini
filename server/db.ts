import { MongoClient, Db } from "mongodb";
import * as schema from "@shared/schema";

// Use a fallback DATABASE_URL if not set in environment
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/planetmini";

const client = new MongoClient(DATABASE_URL);
export const db: Db = client.db();

// Simple in-memory storage for products (fallback when MongoDB is not available)
let productsCache: any[] = [];

export const productsStorage = {
  async getProducts() {
    try {
      const products = await db.collection("products").find({}).toArray();
      return products;
    } catch (error) {
      console.log("MongoDB not available, using cache");
      return productsCache;
    }
  },

  async getProductBySlug(slug: string) {
    try {
      const product = await db.collection("products").findOne({ slug });
      return product;
    } catch (error) {
      console.log("MongoDB not available, using cache");
      return productsCache.find(p => p.slug === slug);
    }
  },

  async createProduct(product: any) {
    try {
      const result = await db.collection("products").insertOne(product);
      return { ...product, _id: result.insertedId };
    } catch (error) {
      console.log("MongoDB not available, adding to cache");
      const newProduct = { ...product, id: productsCache.length + 1 };
      productsCache.push(newProduct);
      return newProduct;
    }
  }
};
