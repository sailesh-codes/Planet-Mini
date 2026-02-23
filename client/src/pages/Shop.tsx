import { motion } from "framer-motion";
import { Link } from "wouter";

interface ShopItem {
  name: string;
  icon: string;
  count: number;
  href: string;
  badge?: string;
}

interface ShopCategory {
  title: string;
  items: ShopItem[];
}

export default function Shop() {
  const categories: ShopCategory[] = [
    {
      title: "Shop by Style",
      items: [
        { name: "Onesies", icon: "👶", count: 24, href: "/shop/style?val=onesies" },
        { name: "Sleepwear", icon: "🌙", count: 18, href: "/shop/style?val=sleepwear" },
        { name: "Cute Outfits", icon: "👗", count: 32, href: "/shop/style?val=outfits" }
      ]
    },
    {
      title: "Shop by Age",
      items: [
        { name: "0-6 Months", icon: "🍼", count: 36, href: "/shop/age?val=0-6" },
        { name: "6-12 Months", icon: "🧸", count: 42, href: "/shop/age?val=6-12" },
        { name: "1-2 Years", icon: "🎈", count: 28, href: "/shop/age?val=1-2" }
      ]
    },
    {
      title: "Baby Care Essentials",
      items: [
        { name: "Bath Towels & Robes", icon: "🛁", count: 15, href: "/shop/care?val=bath" },
        { name: "Bath Toys", icon: "🦆", count: 22, href: "/shop/care?val=toys" },
        { name: "Skincare Products", icon: "🧴", count: 18, href: "/shop/care?val=skincare" },
        { name: "Bibs & Burp Cloths", icon: "🧷", count: 25, href: "/shop/care?val=bibs" }
      ]
    },
    {
      title: "Super Saver Offers",
      items: [
        { name: "3-Pack Onesies", icon: "👕", count: 12, href: "/shop/offers?val=onesies-pack", badge: "33% OFF" },
        { name: "3-Pack Jablas", icon: "🧥", count: 8, href: "/shop/offers?val=jablas-pack", badge: "27% OFF" },
        { name: "3-Pack Diapers", icon: "🚀", count: 15, href: "/shop/offers?val=diapers-pack", badge: "43% OFF" },
        { name: "5-Pack Nappies", icon: "📦", count: 10, href: "/shop/offers?val=nappies-pack", badge: "38% OFF" }
      ]
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
              className="text-5xl md:text-6xl font-bold text-primary mb-6"
            >
              Shop All Categories
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Everything you need for your little one, all in one place
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="grid gap-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center justify-center mb-8">
                <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                  {category.title === "Super Saver Offers" && <span className="text-4xl">🎁</span>}
                  {category.title !== "Super Saver Offers" && <span className="text-4xl">✨</span>}
                  {category.title}
                  {category.title === "Super Saver Offers" && <span className="text-4xl">🎁</span>}
                  {category.title !== "Super Saver Offers" && <span className="text-4xl">✨</span>}
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                    className="group"
                  >
                    <Link href={item.href} className="block">
                      <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10 hover:bg-white/30 transition-all duration-300 p-6 text-center">
                        {item.badge && (
                          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                            {item.badge}
                          </div>
                        )}
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-lg font-semibold text-primary mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{item.count} products</p>
                        <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                          Shop Now
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10 p-8 lg:p-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-primary mb-8 text-center"
          >
            Quick Links
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/about" className="group">
              <div className="text-center p-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/40 transition-all">
                <div className="text-3xl mb-3">🏪</div>
                <h4 className="font-semibold text-primary">About Us</h4>
              </div>
            </Link>
            <Link href="/contact" className="group">
              <div className="text-center p-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/40 transition-all">
                <div className="text-3xl mb-3">📞</div>
                <h4 className="font-semibold text-primary">Contact</h4>
              </div>
            </Link>
            <Link href="/know-us" className="group">
              <div className="text-center p-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/40 transition-all">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="font-semibold text-primary">Know Us</h4>
              </div>
            </Link>
            <Link href="/" className="group">
              <div className="text-center p-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/40 transition-all">
                <div className="text-3xl mb-3">🏠</div>
                <h4 className="font-semibold text-primary">Home</h4>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
