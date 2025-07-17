
'use client';

import { useEffect, useState } from 'react';

interface UserTestimonialsProps {
  translations: any;
}

export default function UserTestimonials({ translations }: UserTestimonialsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="testimonials" className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-20 text-blue-100">
          プレイヤーの声
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {translations.testimonials.map((testimonial: string, index: number) => (
            <div 
              key={index}
              className={`bg-gradient-to-r from-blue-600/30 to-cyan-500/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-400/30 shadow-lg text-center transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400 text-lg md:text-xl"></i>
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400 text-lg md:text-xl"></i>
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400 text-lg md:text-xl"></i>
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400 text-lg md:text-xl"></i>
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400 text-lg md:text-xl"></i>
                </div>
              </div>
              <p className="text-white font-medium text-lg md:text-xl lg:text-2xl">
                {testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
