'use client';

import { useCart } from '@/components/providers/CartProvider';
import { Trash2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="font-spaceGrotesk text-4xl font-bold text-slate-900 mb-4">Your Cart is Empty</h1>
        <p className="text-slate-600 mb-8">Looks like you haven't added anything to your setup yet.</p>
        <Link href="/products" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors">
          Browse Catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-spaceGrotesk text-4xl font-bold text-slate-900 mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-6 glass-panel p-4 rounded-2xl">
              <div className="w-24 h-24 bg-slate-200 rounded-xl flex-shrink-0" />
              <div className="flex-grow">
                <h3 className="font-medium text-slate-900 text-lg">{item.name}</h3>
                <p className="text-slate-500">Qty: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-900 mb-2">£{(item.price * item.quantity).toFixed(2)}</p>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors p-2"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Checkout Panel */}
        <div className="glass-panel p-8 rounded-3xl h-fit sticky top-24">
          <h2 className="font-spaceGrotesk text-2xl font-bold text-slate-900 mb-6">Order Summary</h2>
          
          <div className="space-y-4 border-b border-slate-200 pb-6 mb-6">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span>£{cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
          </div>
          
          <div className="flex justify-between font-bold text-xl text-slate-900 mb-8">
            <span>Total</span>
            <span>£{cartTotal.toFixed(2)}</span>
          </div>

          <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
            Proceed to Checkout <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}