
'use client';

import { useEffect, useState } from 'react';

interface GameOverviewProps {
  translations: any;
}

export default function GameOverview({ translations }: GameOverviewProps) {
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

    const element = document.getElementById('game-overview');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="game-overview" className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 border border-blue-400/20 shadow-2xl">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16 text-blue-100">
            物語
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-200 leading-relaxed text-lg md:text-xl lg:text-2xl text-center lg:text-left">
                {translations.story}
              </p>
            </div>
            
            <div className="flex justify-center">
              <div 
                className="w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Ancient%20magical%20sealing%20circle%20with%20glowing%20blue%20lightning%20runes%2C%20mystical%20symbols%2C%20fantasy%20steampunk%20aesthetic%2C%20electrical%20energy%20flowing%20through%20intricate%20geometric%20patterns%2C%20dark%20stone%20background%2C%20magical%20essence%2C%20high%20detail%20digital%20art%2C%20atmospheric%20lighting%2C%20arcane%20power&width=600&height=400&seq=story-img-desktop&orientation=landscape')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
