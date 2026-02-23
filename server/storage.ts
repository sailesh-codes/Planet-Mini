import { productsStorage } from "./db";
import { type Product } from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  createProduct(product: Omit<Product, "id">): Promise<Product>;
}

export class DatabaseStorage implements IStorage {
  async getProducts(): Promise<Product[]> {
    return await productsStorage.getProducts();
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return await productsStorage.getProductBySlug(slug);
  }

  async createProduct(product: Omit<Product, "id">): Promise<Product> {
    return await productsStorage.createProduct(product);
  }
}

export const storage = new DatabaseStorage();
