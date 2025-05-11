
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { CheckCircle, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const FisherBrandSection: React.FC = () => {
  const { language, t } = useLanguage();
  
  const fisherAdvantages = language === "en" 
    ? [
        { icon: <CheckCircle className="h-6 w-6 text-bolt-600" />, text: "100% Authentic Fisher Products" },
        { icon: <Award className="h-6 w-6 text-bolt-600" />, text: "Official Regional Distributor" },
        { icon: <Shield className="h-6 w-6 text-bolt-600" />, text: "Extended Manufacturer Warranty" }
      ]
    : [
        { icon: <CheckCircle className="h-6 w-6 text-bolt-600" />, text: "100% Аутентични Fisher производи" },
        { icon: <Award className="h-6 w-6 text-bolt-600" />, text: "Званични регионални дистрибутер" },
        { icon: <Shield className="h-6 w-6 text-bolt-600" />, text: "Продужена гаранција произвођача" }
      ];

  return (
    <section className="py-16 bg-gray-50 reveal">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Fisher Logo and Brand Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-bolt-600 font-bold text-5xl mb-1">FISHER</div>
                  <div className="text-gray-500 font-medium text-xl uppercase tracking-wider">
                    {language === "en" ? "Premium Fasteners" : "Премијум Причвршћивачи"}
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-bolt-600 text-white text-xs font-bold py-1 px-3 rounded-full transform rotate-12">
                {language === "en" ? "OFFICIAL IMPORTER" : "ЗВАНИЧНИ УВОЗНИК"}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <span className="bg-bolt-600 bg-opacity-10 text-bolt-600 text-sm font-medium px-4 py-1.5 rounded-full mb-3 inline-block">
              {language === "en" ? "AUTHORIZED FISHER PARTNERSHIP" : "ОВЛАШЋЕНО FISHER ПАРТНЕРСТВО"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "en" 
                ? "Your Trusted Source for Authentic Fisher Products" 
                : "Ваш поуздани извор аутентичних Fisher производа"
              }
            </h2>
            <p className="text-gray-600 mb-6">
              {language === "en"
                ? "As the official regional importer and distributor of Fisher brand products, we provide construction professionals with genuine, high-performance fastening solutions backed by manufacturer warranty and expert technical support."
                : "Као званични регионални увозник и дистрибутер Fisher бренда, пружамо грађевинским професионалцима оригинална, високо-перформансна решења за причвршћивање са произвођачком гаранцијом и стручном техничком подршком."
              }
            </p>
            
            <div className="space-y-3 mb-6">
              {fisherAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-center">
                  {advantage.icon}
                  <span className="ml-2 text-gray-800">{advantage.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-bolt-600 hover:bg-bolt-700 text-white">
                <Link to="/shop">
                  {language === "en" ? "Shop Fisher Products" : "Купи Fisher производе"}
                </Link>
              </Button>
              <Button variant="outline" className="border-bolt-600 text-bolt-600 hover:bg-bolt-50">
                {language === "en" ? "Download Catalog" : "Преузми каталог"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FisherBrandSection;
