'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '@/components/providers/CartProvider';
import Link from 'next/link';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white/90 backdrop-blur-xl border-l border-white/50 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200/50">
              <h2 className="font-spaceGrotesk text-2xl font-bold text-slate-900 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" />
                Your Cart
              </h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-slate-500">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-10 h-10 text-slate-300" />
                  </div>
                  <p>Your cart is currently empty.</p>
                  <button onClick={onClose} className="text-blue-600 font-medium hover:underline">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={item.id} 
                    className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100"
                  >
                    <div className="w-20 h-20 bg-slate-50 rounded-xl flex-shrink-0 border border-slate-100" />
                    <div className="flex-grow">
                      <h3 className="font-medium text-slate-900 truncate">{item.name}</h3>
                      <p className="text-slate-500 text-sm">Qty: {item.quantity}</p>
                      <p className="font-bold text-slate-900 mt-1">£{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Checkout Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-200/50 bg-white/50 backdrop-blur-md">
                <div className="flex justify-between font-bold text-xl text-slate-900 mb-6">
                  <span>Total</span>
                  <span>£{cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-slate-900 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors shadow-lg group">
                  Proceed to Checkout 
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}