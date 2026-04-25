import Link from 'next/link';
import { Anchor } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                <Anchor className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                mostro<span className="text-accent">.gr</span>
              </span>
            </Link>
            <p className="text-background/70 max-w-sm leading-relaxed">
              Premium Sport Rigid Inflatable Boats crafted in Greece for the 
              Mediterranean lifestyle. Experience the Aegean with Mostro.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="#boats" className="hover:text-background transition-colors">
                  Our Boats
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Boats */}
          <div>
            <h4 className="font-semibold mb-4">Model Series</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li className="flex flex-wrap gap-x-3 gap-y-1">
                <Link href="#boats" className="hover:text-background transition-colors">Tender</Link>
                <Link href="#boats" className="hover:text-background transition-colors">Sport</Link>
                <Link href="#boats" className="hover:text-background transition-colors">Family</Link>
              </li>
              <li className="flex flex-wrap gap-x-3 gap-y-1">
                <Link href="#boats" className="hover:text-background transition-colors">Offshore</Link>
                <Link href="#boats" className="hover:text-background transition-colors">Spirit</Link>
                <Link href="#boats" className="hover:text-background transition-colors">Top Gun</Link>
              </li>
              <li className="flex flex-wrap gap-x-3 gap-y-1">
                <Link href="#boats" className="hover:text-background transition-colors">Dolce Vita</Link>
                <Link href="#boats" className="hover:text-background transition-colors">Vendetta</Link>
              </li>
              <li className="flex flex-wrap gap-x-3 gap-y-1">
                <Link href="#boats" className="hover:text-background transition-colors">Cabin</Link>
                <Link href="#boats" className="hover:text-background transition-colors">Convette</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} Mostro.gr. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
