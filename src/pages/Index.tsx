
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import ProductCategories from '../components/ProductCategories';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import ScrollToTop from '../components/ScrollToTop';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <ProductCategories />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default Index;
