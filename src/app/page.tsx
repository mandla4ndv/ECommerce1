import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-12 md:p-24 mb-16 shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <h1 className="font-spaceGrotesk text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Engineered for the Modern Consumer.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 font-light">
            Discover our flagship collection. Minimalist design meets uncompromising performance.
          </p>
          <div className="flex gap-4">
            <Link href="/products" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-slate-900 bg-white hover:bg-slate-100 transition-colors duration-300">
              Shop Catalogue
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-base font-medium rounded-full text-white hover:bg-white/10 transition-colors duration-300">
              Our Story <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl" />
      </section>

      {/* Bento Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        <div className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all">
          <h2 className="font-spaceGrotesk text-3xl font-bold mb-2 z-10 relative">New Arrivals</h2>
          <p className="text-slate-600 z-10 relative">Explore the latest additions to our ecosystem.</p>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-200 rounded-tl-[100px] transform group-hover:scale-105 transition-transform duration-500" />
        </div>
        
        <div className="glass-panel rounded-3xl p-8 bg-blue-600 text-white flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-all hover:bg-blue-700">
          <h3 className="font-spaceGrotesk text-2xl font-bold">Accessories</h3>
          <ArrowRight className="w-8 h-8" />
        </div>
        
        <div className="glass-panel rounded-3xl p-8 bg-slate-100 flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-all">
           <h3 className="font-spaceGrotesk text-2xl font-bold text-slate-900">Essentials</h3>
           <p className="text-slate-500">Everyday carry, refined.</p>
        </div>
        
        <div className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all">
          <h2 className="font-spaceGrotesk text-3xl font-bold mb-2 relative z-10">Premium Audio</h2>
          <p className="text-slate-600 relative z-10">Hear the difference with our bespoke drivers.</p>
           <div className="absolute top-1/2 right-8 -translate-y-1/2 w-48 h-48 bg-slate-800 rounded-full transform group-hover:rotate-12 transition-transform duration-500" />
        </div>
      </section>
    </div>
  );
}