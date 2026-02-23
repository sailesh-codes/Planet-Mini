import { pgTable, text, serial, integer, boolean, numeric, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: numeric("price").notNull(),
  originalPrice: numeric("original_price"),
  category: text("category").notNull(), // style, age, care
  subcategory: text("subcategory"),
  image: text("image").notNull(),
  rating: numeric("rating").notNull(),
  reviews: integer("reviews").notNull(),
  inStock: boolean("in_stock").default(true),
  isNew: boolean("is_new").default(false),
  colors: jsonb("colors").$type<string[]>(),
  sizes: jsonb("sizes").$type<string[]>(),
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;

// We'll handle Cart, Wishlist, and Orders purely in local storage on the frontend 
// as requested, or via simple mock endpoints if needed. To keep it strictly frontend-persisted,
// we don't strictly need DB tables for them, but we define the types here for consistency.

export const cartItemSchema = z.object({
  id: z.string(),
  productId: z.number(),
  quantity: z.number(),
  color: z.string().optional(),
  size: z.string().optional(),
});
export type CartItem = z.infer<typeof cartItemSchema>;

export const orderItemSchema = z.object({
  productId: z.number(),
  quantity: z.number(),
  price: z.number(),
  color: z.string().optional(),
  size: z.string().optional(),
});

export const orderSchema = z.object({
  id: z.string(),
  items: z.array(orderItemSchema),
  total: z.number(),
  status: z.string(),
  date: z.string(),
  shippingDetails: z.object({
    name: z.string(),
    address: z.string(),
  }),
});
export type Order = z.infer<typeof orderSchema>;
