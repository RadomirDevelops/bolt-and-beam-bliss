
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from './products-data';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  delay: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, delay }) => {
  return (
    <Card className={`overflow-hidden product-card reveal hover-scale`} style={{ transitionDelay: `${delay}s` }}>
      <div className="aspect-square overflow-hidden relative bg-gray-50">
        <div className={`absolute top-2 right-2 z-10 px-2 py-1 text-xs font-bold rounded-full ${
          product.tag === 'New' ? 'bg-emerald-600 text-white' : 
          product.tag === 'Sale' ? 'bg-red-600 text-white' : 
          product.tag === 'Best Seller' ? 'bg-amber-500 text-white' : ''
        }`}>
          {product.tag}
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-sm text-gray-500 uppercase">{product.category}</p>
            <h3 className="font-bold text-lg">{product.name}</h3>
          </div>
          <div className="text-right">
            {product.originalPrice ? (
              <div className="flex flex-col items-end">
                <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="font-bold text-red-600">${product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        
        <div className="text-sm text-gray-500 space-y-1">
          <div className="flex justify-between">
            <span>Material:</span>
            <span className="text-gray-900 font-medium">{product.material}</span>
          </div>
          <div className="flex justify-between">
            <span>Size:</span>
            <span className="text-gray-900 font-medium">{product.size}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < product.rating ? 'text-amber-500' : 'text-gray-300'}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
        </div>
        
        <Button 
          onClick={onAddToCart} 
          className="bg-bolt-600 hover:bg-bolt-700 text-white"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4 mr-1" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
