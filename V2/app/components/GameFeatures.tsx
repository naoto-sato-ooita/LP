
'use client';

import { useEffect, useState } from 'react';

interface GameFeaturesProps {
  translations: any;
}

export default function GameFeatures({ translations }: GameFeaturesProps) {
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

    const element = document.getElementById('game-features');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: translations.features.experience,
      description: translations.features.experienceDesc,
      imageQuery: 'icon, 3D cartoon fantasy guild hall with steampunk elements, medieval building with copper pipes and gears, magical workshop atmosphere, the icon should take up 70% of the frame, vibrant colors with soft gradients, minimalist design, smooth rounded shapes, subtle shading, no outlines, centered composition, isolated on white background, playful and friendly aesthetic, isometric perspective, high detail quality, clean and modern look, single object focus'
    },
    {
      title: translations.features.insight,
      description: translations.features.insightDesc,
      imageQuery: 'icon, 3D cartoon brain with glowing lightning bolts, magical thinking concept, electrical synapses, steampunk mechanical elements, the icon should take up 70% of the frame, vibrant colors with soft gradients, minimalist design, smooth rounded shapes, subtle shading, no outlines, centered composition, isolated on white background, playful and friendly aesthetic, isometric perspective, high detail quality, clean and modern look, single object focus'
    },
    {
      title: translations.features.strategy,
      description: translations.features.strategyDesc,
      imageQuery: 'icon, 3D cartoon crafting table with magical tools and gears, steampunk workshop equipment, glowing materials and blueprints, the icon should take up 70% of the frame, vibrant colors with soft gradients, minimalist design, smooth rounded shapes, subtle shading, no outlines, centered composition, isolated on white background, playful and friendly aesthetic, isometric perspective, high detail quality, clean and modern look, single object focus'
    }
  ];

  return (
    <div id="game-features" className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-20 text-blue-100">
          ゲームの特長
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-r from-slate-800/90 to-blue-900/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-400/20 shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} hover:scale-105`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-center space-y-4">
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28feature.imageQuery%29%7D&width=96&height=96&seq=feature-desktop-${index}&orientation=squarish`}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-100 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
