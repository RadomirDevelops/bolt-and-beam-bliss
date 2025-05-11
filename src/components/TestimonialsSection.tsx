
import React from 'react';
import { Star, Award, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from '../contexts/LanguageContext';

interface TestimonialProps {
  text: string;
  author: string;
  role: string;
  rating: number;
  delay: string;
  companyName?: string;
  highlight?: string;
  icon?: React.ReactNode;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  text, 
  author, 
  role, 
  rating, 
  delay,
  companyName,
  highlight,
  icon
}) => {
  return (
    <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal product-card" style={{ transitionDelay: delay }}>
      <CardContent className="p-8">
        {/* Testimonial Quote Icon */}
        <div className="mb-4 flex justify-between items-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                size={18}
              />
            ))}
          </div>
          <div className="text-bolt-600">
            {icon || <BadgeCheck className="w-6 h-6" />}
          </div>
        </div>
        
        {/* Testimonial Text */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          {highlight ? (
            <>
              {text.split(highlight)[0]}
              <span className="font-semibold text-bolt-600">{highlight}</span>
              {text.split(highlight)[1]}
            </>
          ) : text}
        </p>
        
        {/* Author Info */}
        <div className="flex items-center">
          <Avatar className="w-12 h-12 bg-gradient-to-br from-bolt-600 to-blue-300 text-white font-bold text-lg">
            <AvatarFallback className="bg-gradient-to-br from-bolt-600 to-blue-300 text-white">
              {author.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <div className="font-bold text-gray-800">{author}</div>
            <div className="text-sm text-gray-500 flex items-center">
              {role}
              {companyName && (
                <>
                  <span className="mx-1">•</span>
                  <span className="font-medium">{companyName}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();
  
  const testimonials = language === "en" ? [
    {
      text: "Fisher fasteners from FastenerCo have reduced our project delays by 35%. Their quality products and timely deliveries have made us more efficient than ever before.",
      author: "Michael Johnson",
      role: "Construction Manager",
      companyName: "BuildRight Inc.",
      rating: 5,
      delay: "0.1s",
      highlight: "reduced our project delays by 35%",
      icon: <Award className="w-6 h-6" />
    },
    {
      text: "I've never experienced such reliable service with authentic Fisher products. When we needed an emergency order for a major project, they delivered perfect materials in just 8 hours when other suppliers quoted 3 days.",
      author: "Sarah Williams",
      role: "Project Engineer",
      companyName: "Modern Structures",
      rating: 5,
      delay: "0.2s",
      highlight: "delivered perfect materials in just 8 hours",
      icon: <Star className="w-6 h-6 fill-yellow-400" />
    },
    {
      text: "The premium-grade Fisher fasteners we purchase have virtually eliminated our material failure issues. Even in the most demanding conditions, these authentic products consistently outperform the competition.",
      author: "Robert Chen",
      role: "Purchasing Director",
      companyName: "Chen Construction",
      rating: 5,
      delay: "0.3s",
      highlight: "virtually eliminated our material failure issues",
      icon: <BadgeCheck className="w-6 h-6" />
    },
  ] : [
    {
      text: "Fisher причвршћивачи од FastenerCo су смањили кашњења наших пројеката за 35%. Њихови квалитетни производи и правовремене испоруке учинили су нас ефикаснијим него икада пре.",
      author: "Михаило Јовановић",
      role: "Менаџер изградње",
      companyName: "ГрадњаПравo д.о.о.",
      rating: 5,
      delay: "0.1s",
      highlight: "смањили кашњења наших пројеката за 35%",
      icon: <Award className="w-6 h-6" />
    },
    {
      text: "Никада нисам искусио тако поуздану услугу са аутентичним Fisher производима. Када нам је требала хитна наруџбина за велики пројекат, испоручили су савршене материјале за само 8 сати док су други добављачи цитирали 3 дана.",
      author: "Сара Петровић",
      role: "Пројектни инжењер",
      companyName: "Модерне Конструкције",
      rating: 5,
      delay: "0.2s",
      highlight: "испоручили су савршене материјале за само 8 сати",
      icon: <Star className="w-6 h-6 fill-yellow-400" />
    },
    {
      text: "Премијум Fisher причвршћивачи које купујемо практично су елиминисали проблеме са кваром материјала. Чак и у најзахтевнијим условима, ови аутентични производи континуирано надмашују конкуренцију.",
      author: "Роберт Николић",
      role: "Директор набавке",
      companyName: "Николић Градња",
      rating: 5,
      delay: "0.3s",
      highlight: "практично су елиминисали проблеме са кваром материјала",
      icon: <BadgeCheck className="w-6 h-6" />
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="bg-bolt-600 bg-opacity-10 text-bolt-600 text-sm font-medium px-4 py-1.5 rounded-full mb-3 inline-block">
            {language === "en" ? "TRUSTED BY PROFESSIONALS" : "ВЕРУЈУ НАМ ПРОФЕСИОНАЛЦИ"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            {language === "en" ? "Why Industry Leaders Choose Our Fisher Products" : "Зашто индустријски лидери бирају наше Fisher производе"}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === "en" 
              ? "Don't just take our word for it. See how our premium Fisher fasteners and construction materials have transformed businesses and projects across the industry."
              : "Не верујте само нашим речима. Погледајте како су наши премијум Fisher причвршћивачи и грађевински материјали трансформисали бизнисе и пројекте широм индустрије."
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <div className="inline-flex items-center justify-center mb-8 gap-1.5">
            <span className="h-2 w-2 bg-bolt-600 rounded-full"></span>
            <span className="h-2 w-2 bg-bolt-600 opacity-70 rounded-full"></span>
            <span className="h-2 w-2 bg-bolt-600 opacity-40 rounded-full"></span>
          </div>
          <p className="font-medium text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            {language === "en"
              ? "Join over 500+ construction companies that trust our authentic Fisher products for their most critical projects."
              : "Придружите се преко 500+ грађевинских компанија које верују нашим аутентичним Fisher производима за њихове најкритичније пројекте."
            }
          </p>
          <a href="/shop" className="bg-bolt-600 hover:bg-bolt-700 text-white font-medium px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg inline-block">
            {language === "en" ? "Browse Our Fisher Products" : "Прегледајте наше Fisher производе"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
