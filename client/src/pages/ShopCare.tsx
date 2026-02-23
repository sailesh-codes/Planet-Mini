import { motion } from "framer-motion";
import { Link } from "wouter";

export default function ShopCare() {
  const categories = [
    {
      name: "Bath Towels & Robes",
      description: "Soft and absorbent bath essentials",
      icon: "🛁",
      image: "https://images.unsplash.com/photo-1559418306-036f0072cfa1?auto=format&fit=crop&q=80&w=400",
      products: 15
    },
    {
      name: "Bath Toys",
      description: "Fun toys for bath time",
      icon: "🦆",
      image: "https://images.unsplash.com/photo-1628148782352-8705a67978d3?auto=format&fit=crop&q=80&w=400",
      products: 22
    },
    {
      name: "Skincare Products",
      description: "Gentle care for delicate skin",
      icon: "🧴",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=400",
      products: 18
    },
    {
      name: "Bibs & Burp Cloths",
      description: "Essential feeding accessories",
      icon: "🧷",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=400",
      products: 25
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
              Baby Care Essentials
              <span className="text-4xl">✨</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Everything you need for your baby's daily care routine
            </motion.p>
          </div>
        </div>
      </section>

      {/* Care Categories Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10 hover:bg-white/30 transition-all duration-300">
                <div className="aspect-[3/4]">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                    <p className="text-sm text-white/90 mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/80">{category.products} products</span>
                      <Link 
                        to={`/shop/care?val=${category.name.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                        className="bg-white text-primary px-3 py-1 rounded-full text-xs font-semibold hover:bg-white/90 transition-colors"
                      >
                        Shop
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
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-primary mb-8 text-center"
          >
            Why Choose Our Baby Care Products?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🌿</div>
              <h4 className="font-semibold text-primary mb-2">Natural Ingredients</h4>
              <p className="text-sm text-muted-foreground">Safe and gentle formulations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h4 className="font-semibold text-primary mb-2">Dermatologist Tested</h4>
              <p className="text-sm text-muted-foreground">Hypoallergenic and pH balanced</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="font-semibold text-primary mb-2">Eco-Friendly</h4>
              <p className="text-sm text-muted-foreground">Sustainable packaging</p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Tips */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-green-100/50 to-blue-100/50 backdrop-blur-sm border border-white/20 p-8 lg:p-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-primary mb-8 text-center"
          >
            Baby Care Tips
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="font-semibold text-primary mb-3">🛁 Bath Time</h4>
              <p className="text-sm text-muted-foreground">Keep bath time short and sweet. Use lukewarm water and gentle, tear-free products.</p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="font-semibold text-primary mb-3">🧴 Skincare</h4>
              <p className="text-sm text-muted-foreground">Apply moisturizer after bath to keep skin soft and hydrated. Use products specifically formulated for babies.</p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="font-semibold text-primary mb-3">🧷 Feeding Time</h4>
              <p className="text-sm text-muted-foreground">Always have bibs handy to protect clothes. Keep burp cloths within reach for easy cleanup.</p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="font-semibold text-primary mb-3">🦆 Play Time</h4>
              <p className="text-sm text-muted-foreground">Make bath time fun with age-appropriate toys. Always supervise during water play.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
