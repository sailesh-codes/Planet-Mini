import { Link } from "wouter";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-card border-t border-border mt-auto pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-2xl font-display font-bold text-foreground mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-primary-foreground shadow-sm">
                PM
              </div>
              <span>Planet Mini</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Crafting soft, sustainable, and adorable moments for your little ones.
              Welcome to the planet where every mini matters.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Shop</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/shop/style" className="text-muted-foreground hover:text-primary transition-colors text-sm">Shop by Style</Link></li>
              <li><Link href="/shop/age" className="text-muted-foreground hover:text-primary transition-colors text-sm">Shop by Age</Link></li>
              <li><Link href="/shop/care" className="text-muted-foreground hover:text-primary transition-colors text-sm">Baby Care Essentials</Link></li>
              <li><Link href="/shop/new" className="text-muted-foreground hover:text-primary transition-colors text-sm">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Support</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQs</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors text-sm">Shipping & Returns</Link></li>
              <li><Link href="/size-guide" className="text-muted-foreground hover:text-primary transition-colors text-sm">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-xl bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-4 focus:ring-primary/10 transition-all outline-none text-sm"
              />
              <button className="w-full px-4 py-3 bg-foreground text-background font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg shadow-foreground/10 hover:shadow-primary/25 text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Planet Mini. All rights reserved.</p>
          <p className="text-muted-foreground text-sl">Powered by <a href="https://codecraftnet.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Code Craft</a></p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
