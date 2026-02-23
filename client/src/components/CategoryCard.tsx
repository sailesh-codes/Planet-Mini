import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShoppingCart, Star, Package, Baby, Shirt, Moon, Heart } from "lucide-react";

interface CategoryCardProps {
  name: string;
  description: string;
  icon: string;
  image: string;
  href: string;
  productCount?: number;
  badge?: string;
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  '👶': Baby,
  '🌙': Moon,
  '👗': Shirt,
  '🍼': Package,
  '🧸': Heart,
  '🎈': Star,
  '🛁': Package,
  '🦆': Heart,
  '🧴': Package,
  '🧷': Heart,
  '👕': Shirt,
  '🧥': Shirt,
  '🚀': Star,
  '📦': Package,
};

export default function CategoryCard({ 
  name, 
  description, 
  icon, 
  image, 
  href, 
  productCount,
  badge 
}: CategoryCardProps) {
  const IconComponent = iconMap[icon] || Package;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link href={href} className="block">
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
          {badge && (
            <div className="absolute top-4 right-4 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
              {badge}
            </div>
          )}
          
          <div className="aspect-[4/3] relative overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            </div>
            
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {description}
            </p>
            
            <div className="flex items-center justify-between">
              {productCount && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {productCount} products
                </span>
              )}
              
              <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                <span>Shop Now</span>
                <ShoppingCart className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
