import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                P
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Planet Mini
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              The softest, most sustainable essentials for your little ones. Designed with love, made for comfort.
            </p>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-xl bg-muted/50 border-none focus:ring-2 focus:ring-primary/50 outline-none flex-1 max-w-[200px]"
              />
              <button className="px-4 py-2 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link href="/shop/style" className="text-muted-foreground hover:text-primary transition-colors">By Style</Link></li>
              <li><Link href="/shop/age" className="text-muted-foreground hover:text-primary transition-colors">By Age</Link></li>
              <li><Link href="/shop/care" className="text-muted-foreground hover:text-primary transition-colors">Baby Care</Link></li>
              <li><Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">All Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Planet Mini. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
