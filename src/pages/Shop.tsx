
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import ProductsLayout from '../components/e-commerce/ProductsLayout';
import FooterSection from '../components/FooterSection';
import ScrollToTop from '../components/ScrollToTop';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Shop = () => {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-24 md:pt-28 pb-16">
        <ProductsLayout />
      </div>
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default Shop;
