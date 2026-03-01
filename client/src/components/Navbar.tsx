import { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  User, 
  Search, 
  Menu, 
  X
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import GoogleAuthModal from './GoogleAuthModal';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, loading, login } = useAuth();

  const handleProfileClick = () => {
    if (!user) {
      setIsAuthModalOpen(true);
    } else {
      // Navigate to profile or handle logged-in user
      window.location.href = '/profile';
    }
  };

  const handleGoogleLogin = () => {
    setIsAuthModalOpen(false);
    login();
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="text-xl font-bold text-gray-900">Planet Mini</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link href="/style" className="text-gray-700 hover:text-purple-600 transition-colors">
                Style
              </Link>
              <Link href="/age" className="text-gray-700 hover:text-purple-600 transition-colors">
                Age
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-purple-600 transition-colors">
                FAQ
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </Link>
              <Link href="/admin" className="text-gray-700 hover:text-purple-600 transition-colors">
                Admin
              </Link>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button className="p-2 text-gray-700 hover:text-purple-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>

              {/* User */}
              <button
                onClick={handleProfileClick}
                className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                {loading ? (
                  <div className="w-5 h-5 bg-gray-300 rounded-full animate-pulse"></div>
                ) : user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-5 h-5" />
                )}
              </button>

              {/* Cart */}
              <Link href="/cart" className="p-2 text-gray-700 hover:text-purple-600 transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden border-t border-gray-200 overflow-hidden"
              >
                <div className="py-4 space-y-2">
                  <Link
                    href="/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/style"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Style
                  </Link>
                  <Link
                    href="/age"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Age
                  </Link>
                  <Link
                    href="/faq"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/admin"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Admin
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Google Auth Modal */}
      <GoogleAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onGoogleLogin={handleGoogleLogin}
      />
    </>
  );
}
