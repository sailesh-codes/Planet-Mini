import { Link } from "wouter";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/use-products";
import { motion } from "framer-motion";

export default function Home() {
  const { data: products, isLoading } = useProducts();

  const categories = [
    { name: "Newborns", icon: "🍼", href: "/shop/age?val=newborn" },
    { name: "Toddlers", icon: "🧸", href: "/shop/age?val=toddler" },
    { name: "Sleepwear", icon: "🌙", href: "/shop/style?val=sleepwear" },
    { name: "Accessories", icon: "🎀", href: "/shop/style?val=accessories" },
    { name: "Bath & Care", icon: "🛁", href: "/shop/care" },
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-primary/20 flex flex-col lg:flex-row items-center min-h-[80vh]">
          <div className="p-8 lg:p-16 flex-1 z-10 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
            >
              Softness <br/>for their <br/>first steps.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-primary-foreground/80 max-w-md mx-auto lg:mx-0 mb-10"
            >
              Discover our new sustainable collection of baby essentials designed for everyday comfort.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/shop/style">
                <Button size="lg" className="w-full sm:w-auto">Shop Collection</Button>
              </Link>
            </motion.div>
          </div>
          <div className="flex-1 w-full h-full relative min-h-[400px]">
            {/* baby in cute pastel onesie */}
            <img 
              src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1920" 
              alt="Baby sleeping peacefully" 
              className="absolute inset-0 w-full h-full object-cover object-center rounded-b-[2.5rem] lg:rounded-l-none lg:rounded-r-[2.5rem]"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 sm:gap-8 overflow-x-auto hide-scrollbar pb-8 snap-x">
          {categories.map((cat, i) => (
            <Link key={cat.name} href={cat.href} className="snap-start flex flex-col items-center gap-4 group min-w-[120px]">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white shadow-sm flex items-center justify-center text-4xl group-hover:shadow-md group-hover:-translate-y-2 group-hover:bg-primary/10 transition-all duration-300 border border-border">
                {cat.icon}
              </div>
              <span className="font-medium text-foreground text-center">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-2">Trending Now</h2>
            <p className="text-muted-foreground">Most loved by parents this week.</p>
          </div>
          <Link href="/shop" className="hidden sm:block text-primary font-semibold hover:underline">
            View all
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-[4/5] bg-muted rounded-3xl"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
            {products?.slice(0, 8).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
