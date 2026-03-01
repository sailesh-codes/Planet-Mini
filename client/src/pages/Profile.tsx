import { motion } from "framer-motion";
import { Link } from "wouter";
import { User, Settings, ShoppingBag, Heart, Package, LogOut, Edit, Camera, MapPin, Phone, Mail, Calendar, Save } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

interface ProfileData {
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
    joined: string;
    location: string;
  };
  stats: {
    totalOrders: number;
    wishlistItems: number;
    savedAddresses: number;
    paymentMethods: number;
  };
}

export default function Profile() {
  const { user, loading: authLoading } = useAuth();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    phone: "",
    address: "",
    location: ""
  });

  // Redirect to login if not authenticated & fetch profile data
  useEffect(() => {
    if (!authLoading && !user) {
      window.location.href = '/';
      return;
    }
    
    // Only fetch profile data if user is authenticated
    const fetchProfileData = async () => {
      try {
        const response = await fetch('http://localhost:5003/api/profile', {
          credentials: 'include',  // CRITICAL: sends JWT cookie
          headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) throw new Error('Failed to fetch profile');
        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [user, authLoading]);

  const handleEditProfile = async () => {
    // Skip name validation since name field is disabled
    setError(null);

    try {
      const response = await fetch('http://localhost:5003/api/profile', {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Don't send name field - only update other fields
          phone: editForm.phone,
          address: editForm.address,
          location: editForm.location
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedData = await response.json();
      setProfileData(updatedData);
      setIsEditing(false);
      setEditForm({ name: "", phone: "", address: "", location: "" });
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading profile: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Get initials from name
  const initials = profileData?.user.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

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
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                  <span className="text-sm font-medium">
                    {isEditing ? 'Save Profile' : 'Edit Profile'}
                  </span>
                </button>
              </div>
              
              {/* User Info */}
              <div className="flex items-start gap-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    {initials}
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{profileData?.user?.name || 'User'}</h3>
                  <p className="text-gray-600 mb-3">{profileData?.user?.email || 'Not provided'}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Member since {profileData?.user?.joined || 'Unknown'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{profileData?.user?.location || 'Not specified'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Edit Form - Show when editing */}
              {isEditing && (
                <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Edit Profile</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        value={editForm.name}
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
                        placeholder="Name cannot be edited"
                      />
                      <p className="text-xs text-gray-500 mt-1">Name cannot be edited</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="text"
                        value={editForm.phone}
                        onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        value={editForm.address}
                        onChange={(e) => setEditForm({...editForm, address: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        value={editForm.location}
                        onChange={(e) => setEditForm({...editForm, location: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your location"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={handleEditProfile}
                      className="flex-1 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setEditForm({ name: "", phone: "", address: "", location: "" });
                      }}
                      className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">{profileData?.user?.email || 'Not provided'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium text-gray-900">{profileData?.user?.phone || 'Not provided'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Address</p>
                      <p className="font-medium text-gray-900">{profileData?.user?.address || 'Not provided'}</p>
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
                  <span className="font-semibold text-primary">{profileData?.stats?.totalOrders || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Wishlist Items</span>
                  <span className="font-semibold text-primary">{profileData?.stats?.wishlistItems || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Saved Addresses</span>
                  <span className="font-semibold text-primary">{profileData?.stats?.savedAddresses || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payment Methods</span>
                  <span className="font-semibold text-primary">{profileData?.stats?.paymentMethods || 0}</span>
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
