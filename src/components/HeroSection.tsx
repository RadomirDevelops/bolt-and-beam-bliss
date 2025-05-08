
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Wrench, SquareCheckBig, Package, Building } from "lucide-react";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" ref={heroRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 flex justify-around opacity-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i}
            className="h-full border-l border-gray-400"
            style={{ 
              marginLeft: `${i * 8}%`,
              animationDelay: `${i * 0.15}s` 
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 reveal">
                <span className="inline-block px-3 py-1 bg-bolt-700/20 text-bolt-400 rounded-full text-sm font-semibold mb-3">
                  Premium Hardware Solutions
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  The Perfect <span className="highlight-text">Fastener</span> For Every Project
                </h1>
                <p className="mt-6 text-lg text-gray-300">
                  Exceptional quality fasteners and construction materials that professionals trust. Built to last, delivered on time.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8 reveal" style={{ transitionDelay: '0.2s' }}>
                <Button size="lg" className="bg-bolt-600 hover:bg-bolt-700 text-white">
                  Browse Catalog
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Request Quote
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-6 reveal" style={{ transitionDelay: '0.3s' }}>
                <div className="flex items-center gap-2">
                  <SquareCheckBig className="text-bolt-400" size={20} />
                  <span>Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="text-bolt-400" size={20} />
                  <span>Fast Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="text-bolt-400" size={20} />
                  <span>Expert Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="text-bolt-400" size={20} />
                  <span>Bulk Orders</span>
                </div>
              </div>
            </div>
            
            <div className="relative reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-bolt-600 to-bolt-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative bg-gray-900 rounded-2xl p-4 md:p-8 overflow-hidden shadow-xl">
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-metal-800 rounded-lg flex items-center justify-center p-4 animate-float">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v10l4-4" />
                      <path d="M12 2v10l-4-4" />
                      <path d="M12 22a8 8 0 0 0 8-8" />
                      <path d="M12 22a8 8 0 0 1-8-8" />
                      <path d="M20 14a8 8 0 0 0-8-8" />
                      <path d="M4 14a8 8 0 0 1 8-8" />
                    </svg>
                  </div>
                  <div className="aspect-square bg-metal-800 rounded-lg flex items-center justify-center p-4 animate-float" style={{ animationDelay: '0.5s' }}>
                    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 4V2"></path>
                      <path d="M14 10V4"></path>
                      <path d="M10 20v2"></path>
                      <path d="M10 14v6"></path>
                      <path d="M12 14h2a2 2 0 1 0 0-4h-2V4"></path>
                      <path d="M12 14h-2a2 2 0 1 1 0-4h2v10"></path>
                    </svg>
                  </div>
                  <div className="aspect-square bg-metal-800 rounded-lg flex items-center justify-center p-4 animate-float" style={{ animationDelay: '1s' }}>
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <path d="M12 8v8"></path>
                      <path d="m8.5 14 7-4"></path>
                      <path d="m8.5 10 7 4"></path>
                    </svg>
                  </div>
                  <div className="aspect-square bg-metal-800 rounded-lg flex items-center justify-center p-4 animate-float" style={{ animationDelay: '0.7s' }}>
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </div>
                  <div className="aspect-square bg-metal-800 rounded-lg flex items-center justify-center p-4 animate-float" style={{ animationDelay: '1.2s' }}>
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"></path>
                      <path d="M12 13a3 3 0 0 0 3-3H9a3 3 0 0 0 3 3Z"></path>
                      <path d="M18 2H6l-4 7h20Z"></path>
                    </svg>
                  </div>
                  <div className="aspect-square bg-metal-800 rounded-lg flex items-center justify-center p-4 animate-float" style={{ animationDelay: '0.3s' }}>
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20"></path>
                      <path d="M2 5h20"></path>
                      <path d="M3 2h18"></path>
                      <path d="M7 10h10"></path>
                      <path d="M5 14h14"></path>
                      <path d="M8 18h8"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
