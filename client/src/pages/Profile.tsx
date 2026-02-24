import { motion } from "framer-motion";
import { Link } from "wouter";
import { User, Settings, ShoppingBag, Heart, Package, LogOut, Edit, Camera, MapPin, Phone, Mail, Calendar } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">My Profile</h2>
                <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Edit className="w-4 h-4" />
                  <span className="text-sm font-medium">Edit Profile</span>
                </button>
              </div>
              
              {/* User Info */}
              <div className="flex items-start gap-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    JD
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">John Doe</h3>
                  <p className="text-gray-600 mb-3">john.doe@example.com</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Member since October 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>New York, USA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">john.doe@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium text-gray-900">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Address</p>
                      <p className="font-medium text-gray-900">123 Baby Street, New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Menu */}
              <div className="space-y-2">
                <Link 
                  href="/profile/orders"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Package className="w-5 h-5 text-gray-600" />
                  <div className="flex-1">
                    <span className="text-gray-700 font-medium">My Orders</span>
                    <p className="text-sm text-gray-500">View order history and tracking</p>
                  </div>
                </Link>
                <Link 
                  href="/profile/wishlist"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Heart className="w-5 h-5 text-gray-600" />
                  <div className="flex-1">
                    <span className="text-gray-700 font-medium">Wishlist</span>
                    <p className="text-sm text-gray-500">Items you've saved for later</p>
                  </div>
                </Link>
                <Link 
                  href="/profile/settings"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Settings className="w-5 h-5 text-gray-600" />
                  <div className="flex-1">
                    <span className="text-gray-700 font-medium">Settings</span>
                    <p className="text-sm text-gray-500">Account preferences and privacy</p>
                  </div>
                </Link>
                <Link 
                  href="/profile/addresses"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <div className="flex-1">
                    <span className="text-gray-700 font-medium">Addresses</span>
                    <p className="text-sm text-gray-500">Manage shipping addresses</p>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Account Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Orders</span>
                  <span className="font-semibold text-primary">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Wishlist Items</span>
                  <span className="font-semibold text-primary">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Saved Addresses</span>
                  <span className="font-semibold text-primary">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payment Methods</span>
                  <span className="font-semibold text-primary">2</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 pb-3 border-b">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">Order #1234 delivered</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pb-3 border-b">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">New item added to wishlist</p>
                    <p className="text-xs text-gray-500">1 week ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pb-3 border-b">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">Profile updated</p>
                    <p className="text-xs text-gray-500">2 weeks ago</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left">
                  <ShoppingBag className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">Start Shopping</span>
                </button>
                <button className="w-full flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left">
                  <Heart className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">View Wishlist</span>
                </button>
                <button className="w-full flex items-center gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors text-left">
                  <LogOut className="w-5 h-5 text-red-500" />
                  <span className="text-red-600 font-medium">Sign Out</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
