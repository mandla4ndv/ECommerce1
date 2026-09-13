import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/composite/Navbar';
import { CartProvider } from '@/components/providers/CartProvider'; // NEW IMPORT

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'NexusCommerce | Premium Storefront',
  description: 'Next-generation e-commerce platform built with Next.js 15.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        {/* Wrap everything inside the body with the CartProvider */}
        <CartProvider>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}