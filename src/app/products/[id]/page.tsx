'use client';

import { ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '@/components/providers/CartProvider';
import { use, useState } from 'react';

// Mock database until we connect Prisma
const mockProductDB = {
  '1': { id: '1', name: 'Nexus Quantum Headset', price: 299.00, category: 'Audio', desc: 'Engineered with bespoke neodymium drivers and adaptive active noise cancellation. The Quantum headset delivers an unparalleled auditory experience encased in a minimalist, aerospace-grade aluminium frame.' },
  '2': { id: '2', name: 'Minimalist Alloy Watch', price: 199.50, category: 'Wearables', desc: 'A precision-engineered timepiece forged from a single block of titanium. Features a sapphire crystal face and a frictionless magnetic clasp.' },
  '3': { id: '3', name: 'Ergonomic Slate Keyboard', price: 149.00, category: 'Peripherals', desc: 'Tactile mechanical switches housed in a low-profile slate chassis. Designed for developers who demand both aesthetics and performance.' },
  '4': { id: '4', name: 'Titanium Travel Flask', price: 45.00, category: 'Lifestyle', desc: 'Double-walled vacuum insulation keeps liquids cold for 24 hours or hot for 12. Unbreakable and astonishingly lightweight.' },
};

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  
  const product = mockProductDB[id as keyof typeof mockProductDB];
  
  if (!product) return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center font-spaceGrotesk text-2xl">
      Product Not Found
    </div>
  );

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
    });
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Product Imagery */}
        <div className="aspect-square bg-slate-200 rounded-3xl relative overflow-hidden shadow-inner">
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
            [Product Image / 3D Render]
          </div>
        </div>

        {/* Product Data & Actions */}
        <div className="flex flex-col justify-center">
          <p className="text-blue-600 font-medium mb-2 tracking-wide uppercase text-sm">
            {product.category}
          </p>
          <h1 className="font-spaceGrotesk text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {product.name}
          </h1>
          <p className="text-2xl font-light text-slate-600 mb-8">
            £{product.price.toFixed(2)}
          </p>
          
          <p className="text-slate-600 leading-relaxed mb-8">
            {product.desc}
          </p>

          <div className="flex gap-4 mb-12">
            <button 
              onClick={handleAddToCart}
              className={`flex-1 px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all shadow-lg transform hover:-translate-y-0.5 ${
                isAdded 
                  ? 'bg-green-600 text-white hover:bg-green-700 shadow-green-600/20' 
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              {isAdded ? 'Added to Cart!' : 'Add to Cart'}
            </button>
            <button className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          <div className="border-t border-slate-200 pt-8 space-y-4 text-sm text-slate-600">
            <div className="flex justify-between">
              <span className="font-medium text-slate-900">Connectivity</span>
              <span>Bluetooth 5.4, USB-C</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-slate-900">Global Shipping</span>
              <span>Dispatched within 24 hours</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-slate-900">Warranty</span>
              <span>2-Year Global Care</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}