import Link from 'next/link';

// Mock data array to visualise the UI before database integration
const mockProducts = [
  { id: '1', name: 'Nexus Quantum Headset', price: '299.00', category: 'Audio' },
  { id: '2', name: 'Minimalist Alloy Watch', price: '199.50', category: 'Wearables' },
  { id: '3', name: 'Ergonomic Slate Keyboard', price: '149.00', category: 'Peripherals' },
  { id: '4', name: 'Titanium Travel Flask', price: '45.00', category: 'Lifestyle' },
];

export default async function ProductsPage() {
  const products = mockProducts; 

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-spaceGrotesk text-4xl font-bold text-slate-900 mb-2">Catalogue</h1>
          <p className="text-slate-600">Browse our complete collection of premium gear.</p>
        </div>
        <div className="hidden md:flex gap-4">
          <button className="text-sm font-medium text-slate-600 hover:text-slate-900">Filter</button>
          <button className="text-sm font-medium text-slate-600 hover:text-slate-900">Sort by: Featured</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className="group cursor-pointer">
            <div className="aspect-square bg-slate-200 rounded-2xl mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
            </div>
            <h3 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">{product.name}</h3>
            <p className="text-slate-500 text-sm mb-2">{product.category}</p>
            <p className="font-spaceGrotesk font-bold text-slate-900">£{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}