import { Link } from "wouter";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/use-products";
import { motion } from "framer-motion";
import Slider from "@/components/Slider";

export default function Home() {
  const { data: products, isLoading } = useProducts();

  const sliderSlides = [
    {
      id: 1,
      title: "Welcome to\nPlanet Mini",
      subtitle: "Adorable & Comfortable Baby Wear",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600",
      buttonText: "Shop Now",
      buttonLink: "/shop"
    },
    {
      id: 2,
      title: "Soft & Safe\nFabrics",
      subtitle: "Gentle on your baby's delicate skin",
      image: "https://images.unsplash.com/photo-1541697960113-1ca22342bd6d?auto=format&fit=crop&q=80&w=600",
      buttonText: "Explore Collection",
      buttonLink: "/shop/style"
    },
    {
      id: 3,
      title: "Eco-Friendly\nBaby Care",
      subtitle: "Sustainable choices for your little one",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600",
      buttonText: "Learn More",
      buttonLink: "/about"
    }
  ];

  const shopByStyle = [
    { name: "Onesies", icon: "👶", href: "/shop/style?val=onesies" },
    { name: "Sleepwear", icon: "🌙", href: "/shop/style?val=sleepwear" },
    { name: "Cute Outfits", icon: "👗", href: "/shop/style?val=outfits" }
  ];

  const shopByAge = [
    { name: "0-6 Months", icon: "🍼", href: "/shop/age?val=0-6" },
    { name: "6-12 Months", icon: "🧸", href: "/shop/age?val=6-12" },
    { name: "1-2 Years", icon: "🎈", href: "/shop/age?val=1-2" }
  ];

  const babyCareEssentials = [
    { name: "Bath Towels & Robes", icon: "🛁", href: "/shop/care?val=bath" },
    { name: "Bath Toys", icon: "🦆", href: "/shop/care?val=toys" },
    { name: "Skincare Products", icon: "🧴", href: "/shop/care?val=skincare" },
    { name: "Bibs & Burp Cloths", icon: "🧷", href: "/shop/care?val=bibs" }
  ];

  const superSaverOffers = [
    { name: "3-Pack Onesies", icon: "👕", href: "/shop/offers?val=onesies-pack", badge: null },
    { name: "3-Pack Jablas", icon: "🧥", href: "/shop/offers?val=jablas-pack", badge: null },
    { name: "3-Pack Diapers", icon: "🚀", href: "/shop/offers?val=diapers-pack", badge: "BEST OFFER" },
    { name: "5-Pack Nappies", icon: "�", href: "/shop/offers?val=nappies-pack", badge: null }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section with Slider */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-blue-100/50 via-pink-100/50 to-purple-100/50 backdrop-blur-sm border border-white/20 shadow-xl">
          <Slider slides={sliderSlides} autoPlay={true} interval={4000} />
        </div>
      </section>

      {/* Shop by Style Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10 p-8 lg:p-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <span className="text-4xl">✨</span>
              Shop by Style
              <span className="text-4xl">✨</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {shopByStyle.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={category.href} className="block">
                  <div className="relative rounded-2xl overflow-hidden bg-white/30 backdrop-blur-sm border border-white/20 p-8 text-center group-hover:bg-white/40 transition-all duration-300">
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-lg font-semibold text-primary">{category.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Age Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10 p-8 lg:p-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <span className="text-4xl">✨</span>
              Shop by Age
              <span className="text-4xl">✨</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {shopByAge.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={category.href} className="block">
                  <div className="relative rounded-2xl overflow-hidden bg-white/30 backdrop-blur-sm border border-white/20 p-8 text-center group-hover:bg-white/40 transition-all duration-300">
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-lg font-semibold text-primary">{category.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Baby Care Essentials Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10 p-8 lg:p-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <span className="text-4xl">✨</span>
              Baby Care Essentials
              <span className="text-4xl">✨</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {babyCareEssentials.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={category.href} className="block">
                  <div className="relative rounded-2xl overflow-hidden bg-white/30 backdrop-blur-sm border border-white/20 p-6 text-center group-hover:bg-white/40 transition-all duration-300">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-sm font-semibold text-primary mb-3">{category.name}</h3>
                    <Button size="sm" className="w-full">Shop Now</Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Super Saver Offers Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-yellow-100/50 to-orange-100/50 backdrop-blur-sm border border-white/20 p-8 lg:p-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <span className="text-4xl">🎁</span>
              Super Saver Offers
              <span className="text-4xl">🎁</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {superSaverOffers.map((offer, index) => (
              <motion.div
                key={offer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <Link href={offer.href} className="block">
                  <div className="relative rounded-2xl overflow-hidden bg-white/30 backdrop-blur-sm border border-white/20 p-6 text-center group-hover:bg-white/40 transition-all duration-300">
                    {offer.badge && (
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        {offer.badge}
                      </div>
                    )}
                    <div className="text-4xl mb-3">{offer.icon}</div>
                    <h3 className="text-sm font-semibold text-primary mb-3">{offer.name}</h3>
                    <Button size="sm" className="w-full">Shop Now</Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us / Contact Us / Know Us Links */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/10 p-8 lg:p-16">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link href="/about" className="text-center group">
              <div className="rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20 p-6 group-hover:bg-white/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-primary mb-2">About Us</h3>
                <p className="text-sm text-muted-foreground">Learn more about our story</p>
              </div>
            </Link>
            <Link href="/contact" className="text-center group">
              <div className="rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20 p-6 group-hover:bg-white/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-primary mb-2">Contact Us</h3>
                <p className="text-sm text-muted-foreground">Get in touch with us</p>
              </div>
            </Link>
            <Link href="/know-us" className="text-center group">
              <div className="rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20 p-6 group-hover:bg-white/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-primary mb-2">Know Us</h3>
                <p className="text-sm text-muted-foreground">Discover our mission</p>
              </div>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🌿</div>
              <h4 className="font-semibold text-primary mb-2">Soft & Safe Fabrics</h4>
              <p className="text-sm text-muted-foreground">Gentle on baby's delicate skin</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="font-semibold text-primary mb-2">Eco-Friendly Materials</h4>
              <p className="text-sm text-muted-foreground">Sustainable choices for our planet</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💕</div>
              <h4 className="font-semibold text-primary mb-2">Loved by Parents</h4>
              <p className="text-sm text-muted-foreground">Trusted by families worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Growing Family Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-purple-100/50 via-pink-100/50 to-blue-100/50 backdrop-blur-sm border border-white/20 p-8 lg:p-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <span className="text-4xl">✨</span>
              Join the Growing Family!
              <span className="text-4xl">✨</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Happy family 1" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Happy family 2" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Happy family 3" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-primary">Happy Parents, Happy Babies!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
