
import React, { useState } from 'react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { SlidersHorizontal, ShoppingCart } from "lucide-react";
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { products } from './products-data';

const categoriesWithCounts = [
  { name: 'All Products', count: products.length },
  { name: 'Bolts', count: products.filter(p => p.category === 'bolts').length },
  { name: 'Nuts', count: products.filter(p => p.category === 'nuts').length },
  { name: 'Screws', count: products.filter(p => p.category === 'screws').length },
  { name: 'Washers', count: products.filter(p => p.category === 'washers').length },
  { name: 'Anchors', count: products.filter(p => p.category === 'anchors').length },
  { name: 'Specialty', count: products.filter(p => p.category === 'specialty').length }
];

const ProductsLayout: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const filteredProducts = selectedCategory === 'All Products'
    ? products
    : products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-8 reveal">
        <h1 className="text-3xl md:text-4xl font-bold">Shop Our Products</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <ShoppingCart size={20} />
          <span>Cart ({cartCount})</span>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar with filters */}
        <div className="md:w-1/4 reveal" style={{ transitionDelay: "0.1s" }}>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b">
              <SlidersHorizontal size={18} className="text-bolt-600" />
              <h3 className="font-bold">Categories</h3>
            </div>
            <ul className="space-y-2">
              {categoriesWithCounts.map((cat, index) => (
                <li key={index}>
                  <button
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`w-full text-left flex justify-between items-center py-2 px-3 rounded-md transition-colors ${
                      selectedCategory === cat.name
                        ? 'bg-bolt-600 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-sm ${
                      selectedCategory === cat.name
                        ? 'bg-white text-bolt-600'
                        : 'bg-gray-200'
                    } px-2 py-0.5 rounded-full`}>
                      {cat.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main product grid */}
        <div className="md:w-3/4">
          <div className="bg-white p-4 rounded-lg shadow-md mb-6 reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="mb-4 md:mb-0">
                Showing <span className="font-semibold">{filteredProducts.length}</span> products
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="border rounded-md px-3 py-1.5">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart}
                delay={(index % 3) * 0.1 + 0.3}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
