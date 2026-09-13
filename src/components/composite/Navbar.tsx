'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/components/providers/CartProvider';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-md border-b border-slate-200/50 shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">N</span>
              </div>
              <span className="font-spaceGrotesk font-bold text-xl tracking-tight text-slate-900">
                Nexus
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Catalogue', 'New Arrivals', 'Brands', 'Editorial'].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Utility Icons */}
            <div className="flex items-center space-x-5">
              <button aria-label="Search" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              
              {/* Cart Button: Triggers the Drawer */}
              <button 
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Cart" 
                className="relative text-slate-600 hover:text-blue-600 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-sm"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </button>
              
              <button className="md:hidden text-slate-600">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* The Animated Drawer Overlay */}
      <CartDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}