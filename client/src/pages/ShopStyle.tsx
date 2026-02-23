import { motion } from "framer-motion";
import { Link } from "wouter";
import CategoryCard from "@/components/CategoryCard";
import { Sparkles } from "lucide-react";

export default function ShopStyle() {
  const categories = [
    {
      name: "Onesies",
      description: "Comfortable and adorable onesies for everyday wear",
      icon: "👶",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=400",
      productCount: 24,
      href: "/shop/style?val=onesies"
    },
    {
      name: "Sleepwear",
      description: "Cozy sleepwear for peaceful nights",
      icon: "🌙",
      image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?auto=format&fit=crop&q=80&w=400",
      productCount: 18,
      href: "/shop/style?val=sleepwear"
    },
    {
      name: "Cute Outfits",
      description: "Stylish outfits for special occasions",
      icon: "👗",
      image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=400",
      productCount: 32,
      href: "/shop/style?val=outfits"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm p-8 lg:p-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3"
          >
            <Sparkles className="w-8 h-8 text-primary" />
            Shop by Style
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Find the perfect style for your little one with our curated collection
          </motion.p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm p-8 lg:p-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🌿</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Soft Fabrics</h4>
              <p className="text-sm text-gray-600">Gentle on delicate skin</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎨</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cute Designs</h4>
              <p className="text-sm text-gray-600">Adorable prints and patterns</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💯</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Premium Quality</h4>
              <p className="text-sm text-gray-600">Durable and long-lasting</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
