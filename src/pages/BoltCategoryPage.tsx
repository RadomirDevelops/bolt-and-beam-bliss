
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BoltBrochure from '../components/brochure/BoltBrochure';
import FooterSection from '../components/FooterSection';
import ScrollToTop from '../components/ScrollToTop';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const BoltCategoryPage = () => {
  // Initialize scroll animations
  useScrollAnimation();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  // Update document title based on language
  useEffect(() => {
    document.title = language === "en" 
      ? "Bolt Products - FastenerCo Fisher Products" 
      : "Bolt Производи - FastenerCo Fisher производи";
  }, [language]);

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-24 md:pt-28 pb-16">
        <BoltBrochure />
      </div>
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default BoltCategoryPage;
