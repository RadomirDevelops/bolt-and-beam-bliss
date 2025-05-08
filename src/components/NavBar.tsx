
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Wrench, Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className={`flex items-center justify-center w-10 h-10 rounded-md ${isScrolled ? 'bg-bolt-600' : 'bg-white/90'}`}>
                <Wrench className={`${isScrolled ? 'text-white' : 'text-bolt-600'}`} size={24} />
              </div>
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                FastenerCo
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className={`font-medium ${isScrolled ? 'text-gray-900 hover:text-bolt-600' : 'text-white hover:text-bolt-200'}`}>
              Home
            </a>
            <a href="#categories" className={`font-medium ${isScrolled ? 'text-gray-900 hover:text-bolt-600' : 'text-white hover:text-bolt-200'}`}>
              Products
            </a>
            <a href="#features" className={`font-medium ${isScrolled ? 'text-gray-900 hover:text-bolt-600' : 'text-white hover:text-bolt-200'}`}>
              Features
            </a>
            <a href="#testimonials" className={`font-medium ${isScrolled ? 'text-gray-900 hover:text-bolt-600' : 'text-white hover:text-bolt-200'}`}>
              Testimonials
            </a>
            <a href="#contact" className={`font-medium ${isScrolled ? 'text-gray-900 hover:text-bolt-600' : 'text-white hover:text-bolt-200'}`}>
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className={isScrolled ? 'bg-bolt-600 hover:bg-bolt-700' : 'bg-white text-bolt-600 hover:bg-gray-100'}>
              Get Quote
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="font-medium text-gray-900 hover:text-bolt-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </a>
              <a href="#categories" className="font-medium text-gray-900 hover:text-bolt-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Products
              </a>
              <a href="#features" className="font-medium text-gray-900 hover:text-bolt-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </a>
              <a href="#testimonials" className="font-medium text-gray-900 hover:text-bolt-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Testimonials
              </a>
              <a href="#contact" className="font-medium text-gray-900 hover:text-bolt-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </a>
              <Button className="bg-bolt-600 hover:bg-bolt-700 w-full mt-2">
                Get Quote
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
