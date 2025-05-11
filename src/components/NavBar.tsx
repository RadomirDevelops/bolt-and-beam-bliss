import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Wrench, Menu, X, ShoppingCart, Globe, ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const productCategories = [
  { name: "categories.bolts", href: "/category/bolts" },
  { name: "categories.screws", href: "/category/screws" },
  { name: "categories.anchors", href: "/category/anchors" },
  { name: "categories.tools", href: "/category/tools" },
  { name: "categories.accessories", href: "/category/accessories" },
  { name: "categories.adhesives", href: "/category/adhesives" }
];

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sr" : "en");
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className={`flex items-center justify-center w-10 h-10 rounded-md ${isScrolled ? 'bg-bolt-600' : 'bg-white/90'}`}>
                <Wrench className={`${isScrolled ? 'text-white' : 'text-bolt-600'}`} size={24} />
              </div>
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                FastenerCo
              </span>
              <span className={`text-sm font-medium ${isScrolled ? 'text-bolt-600' : 'text-white/80'}`}>
                • Fisher {language === "en" ? "Importer" : "Увозник"}
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium ${isScrolled ? 'text-gray-900 hover:text-bolt-600' : 'text-white hover:text-bolt-200'}`}>
              {t("nav.home")}
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`font-medium ${isScrolled ? 'text-gray-900 hover:text-bolt-600 bg-transparent hover:bg-transparent' : 'text-white hover:text-bolt-200 bg-transparent hover:bg-transparent'}`}>
                    {t("nav.products")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      {productCategories.map((category) => (
                        <li key={category.name} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <a
                              href={category.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{t(category.name)}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <a
                            href="/categories"
                            className="block w-full select-none rounded-md bg-bolt-600 p-3 text-center text-sm font-medium text-white no-underline outline-none transition-colors hover:bg-bolt-700"
                          >
                            {t("categories.viewAll")}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a href="/#features" className={`font-medium ${isScrolled ? 'text-gray-900 hover:text-bolt-600' : 'text-white hover:text-bolt-200'}`}>
              {t("nav.features")}
            </a>
            <a href="/#testimonials" className={`font-medium ${isScrolled ? 'text-gray-900 hover:text-bolt-600' : 'text-white hover:text-bolt-200'}`}>
              {t("nav.testimonials")}
            </a>
            <a href="/#contact" className={`font-medium ${isScrolled ? 'text-gray-900 hover:text-bolt-600' : 'text-white hover:text-bolt-200'}`}>
              {t("nav.contact")}
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-bolt-600 flex items-center`}
            >
              <Globe size={20} className="mr-1" />
              <span className="text-sm">{language === "en" ? "SR" : "EN"}</span>
            </button>
            <Link to="/categories" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-bolt-600`}>
              <ShoppingCart size={24} />
            </Link>
            <Button className={isScrolled ? 'bg-bolt-600 hover:bg-bolt-700' : 'bg-white text-bolt-600 hover:bg-gray-100'}>
              {t("nav.getQuote")}
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
              <Link to="/" className="font-medium text-gray-900 hover:text-bolt-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.home")}
              </Link>
              
              <div className="relative">
                <button className="w-full flex items-center justify-between font-medium text-gray-900 hover:text-bolt-600 py-2">
                  {t("nav.products")} <ChevronDown size={16} />
                </button>
                <div className="pl-4 mt-2 space-y-2">
                  {productCategories.map((category) => (
                    <a 
                      key={category.name}
                      href={category.href}
                      className="block font-medium text-gray-700 hover:text-bolt-600 py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(category.name)}
                    </a>
                  ))}
                  <a 
                    href="/categories"
                    className="block font-medium text-bolt-600 hover:text-bolt-700 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("categories.viewAll")}
                  </a>
                </div>
              </div>
              
              <a href="/#features" className="font-medium text-gray-900 hover:text-bolt-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.features")}
              </a>
              <a href="/#testimonials" className="font-medium text-gray-900 hover:text-bolt-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.testimonials")}
              </a>
              <a href="/#contact" className="font-medium text-gray-900 hover:text-bolt-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.contact")}
              </a>
              <div className="flex items-center justify-between pt-2">
                <button 
                  onClick={toggleLanguage}
                  className="text-gray-900 hover:text-bolt-600 flex items-center"
                >
                  <Globe size={20} className="mr-1" />
                  <span>{language === "en" ? "SR" : "EN"}</span>
                </button>
                <Link to="/categories" className="text-gray-900 hover:text-bolt-600" onClick={() => setIsMobileMenuOpen(false)}>
                  <ShoppingCart size={24} />
                </Link>
              </div>
              <Button className="bg-bolt-600 hover:bg-bolt-700 w-full mt-2">
                {t("nav.getQuote")}
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
