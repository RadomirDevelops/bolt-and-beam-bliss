
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
import { useLanguage } from '../contexts/LanguageContext';
import FisherBrandSection from '../components/FisherBrandSection';

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();
  const { language } = useLanguage();

  // Update document title based on language
  useEffect(() => {
    document.title = language === "en" 
      ? "FastenerCo - Official Fisher Brand Importer" 
      : "FastenerCo - Званични увозник Fisher бренда";
  }, [language]);

  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <FisherBrandSection />
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
