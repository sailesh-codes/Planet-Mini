import { motion } from "framer-motion";
import { Link } from "wouter";

export default function ShopAge() {
  const categories = [
    {
      name: "0-6 Months",
      description: "Essentials for newborns and infants",
      icon: "🍼",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=400",
      products: 36,
      sizeRange: "0-6 months"
    },
    {
      name: "6-12 Months",
      description: "Clothing for growing babies",
      icon: "🧸",
      image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?auto=format&fit=crop&q=80&w=400",
      products: 42,
      sizeRange: "6-12 months"
    },
    {
      name: "1-2 Years",
      description: "Outfits for toddlers and little walkers",
      icon: "🎈",
      image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=400",
      products: 28,
      sizeRange: "1-2 years"
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
              Shop by Age
              <span className="text-4xl">✨</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Find the perfect fit for your growing little one
            </motion.p>
          </div>
        </div>
      </section>

      {/* Age Categories */}
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
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-white/80">{category.products} products</span>
                      <span className="text-sm bg-white/20 px-2 py-1 rounded-full">{category.sizeRange}</span>
                    </div>
                    <Link 
                      to={`/shop/age?val=${category.name.toLowerCase().replace(' ', '-')}`}
                      className="w-full bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors text-center block"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Size Guide */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10 p-8 lg:p-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-primary mb-8 text-center"
          >
            Size Guide
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/20">
              <h4 className="font-semibold text-primary mb-3">0-6 Months</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Newborn: 0-3 months</li>
                <li>Weight: 6-12 lbs</li>
                <li>Height: 18-24 inches</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/20">
              <h4 className="font-semibold text-primary mb-3">6-12 Months</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Infant: 6-12 months</li>
                <li>Weight: 12-20 lbs</li>
                <li>Height: 24-29 inches</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/20">
              <h4 className="font-semibold text-primary mb-3">1-2 Years</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Toddler: 12-24 months</li>
                <li>Weight: 20-28 lbs</li>
                <li>Height: 29-35 inches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
