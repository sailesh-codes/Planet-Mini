## Packages
framer-motion | Page transitions and scroll-triggered animations
zustand | Global state management for Cart, Wishlist, and User Session
lucide-react | Icons for the UI
clsx | Utility for constructing className strings conditionally
tailwind-merge | Utility to intuitively merge Tailwind CSS classes

## Notes
- Products API uses standard REST endpoints as defined in shared/schema.ts
- Cart, Wishlist, and Orders are persisted locally using Zustand's persist middleware
- Assuming the backend will serve the product data at /api/products
