
'use client';

import { useEffect, useState } from 'react';

interface HeroSectionProps {
  translations: any;
}

export default function HeroSection({ translations }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 py-20 relative max-w-7xl mx-auto">
      <div 
        className="absolute inset-0 z-0 rounded-3xl"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Epic%20fantasy%20steampunk%20scene%20with%20massive%20white%20ice%20dragon%20with%20glowing%20red%20eyes%20towering%20over%20snowy%20mountains%2C%20lightning%20bolts%20crackling%20through%20stormy%20blue%20sky%2C%20ancient%20Tesla%20coil%20towers%20with%20copper%20wiring%2C%20lone%20warrior%20in%20blue%20steampunk%20gear%20facing%20the%20dragon%2C%20dramatic%20cinematic%20lighting%2C%20high%20detail%20digital%20art%2C%20frozen%20wasteland%2C%20electrical%20energy%2C%20mystical%20atmosphere&width=1200&height=800&seq=hero-bg-desktop&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10 rounded-3xl" />
      
      <div className={`relative z-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} max-w-4xl`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white drop-shadow-2xl font-pacifico">
          {translations.title}
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl text-blue-200 mb-8 md:mb-12 drop-shadow-lg">
          {translations.subtitle}
        </p>
        
        <div className="bg-gradient-to-r from-blue-600/80 to-cyan-500/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 mb-8 md:mb-12 border border-blue-400/30 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white drop-shadow-lg">
            {translations.catchphrase}
          </p>
        </div>

        <div className="flex justify-center">
          <img 
            src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="h-14 md:h-16 lg:h-18 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
