import { motion } from "framer-motion";
import { Link } from "wouter";

export default function ShopStyle() {
  const categories = [
    {
      name: "Onesies",
      description: "Comfortable and adorable onesies for everyday wear",
      icon: "👶",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=400",
      products: 24
    },
    {
      name: "Sleepwear",
      description: "Cozy sleepwear for peaceful nights",
      icon: "🌙",
      image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?auto=format&fit=crop&q=80&w=400",
      products: 18
    },
    {
      name: "Cute Outfits",
      description: "Stylish outfits for special occasions",
      icon: "👗",
      image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=400",
      products: 32
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white/30 backdrop-blur-md border border-white/20 shadow-xl">
          <div className="p-8 lg:p-16 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-primary mb-6 flex items-center justify-center gap-3"
            >
              <span className="text-4xl">✨</span>
              Shop by Style
              <span className="text-4xl">✨</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Find the perfect style for your little one with our curated collection
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10 hover:bg-white/30 transition-all duration-300">
                <div className="aspect-square">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-white/90 mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/80">{category.products} products</span>
                      <Link 
                        to={`/shop/style?val=${category.name.toLowerCase()}`}
                        className="bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10 p-8 lg:p-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🌿</div>
              <h4 className="font-semibold text-primary mb-2">Soft Fabrics</h4>
              <p className="text-sm text-muted-foreground">Gentle on delicate skin</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-semibold text-primary mb-2">Cute Designs</h4>
              <p className="text-sm text-muted-foreground">Adorable prints and patterns</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💯</div>
              <h4 className="font-semibold text-primary mb-2">Premium Quality</h4>
              <p className="text-sm text-muted-foreground">Durable and long-lasting</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
