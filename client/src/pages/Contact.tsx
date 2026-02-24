import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Building, Home, Truck } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-pink-100/70 via-rose-100/60 to-pink-100/50 backdrop-blur-sm border border-white/20 shadow-xl">
          <div className="p-8 lg:p-16 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-primary mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We're here to help! Get in touch with our team for any questions or support.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Our friendly customer service team is here to help you with any questions about our products, orders, or services.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@planetmini.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri: 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">123 Baby Street</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                    <p className="text-sm text-gray-500">United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-gray-600">Saturday: 10AM - 4PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="/faq" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>FAQs</span>
                </a>
                <a href="/shipping" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                  <Truck className="w-5 h-5" />
                  <span>Shipping Information</span>
                </a>
                <a href="/returns" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                  <Building className="w-5 h-5" />
                  <span>Returns & Exchanges</span>
                </a>
                <a href="/size-guide" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                  <Home className="w-5 h-5" />
                  <span>Size Guide</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                    placeholder="Tell us more about your question or concern..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    * Required fields
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Store</h2>
            <p className="text-gray-600 mb-6">
              Come visit our flagship store in New York City to see our products in person and meet our friendly team.
            </p>
          </div>
          <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Interactive Map</p>
              <p className="text-sm text-gray-500">123 Baby Street, New York, NY</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
