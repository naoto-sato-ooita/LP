
'use client';

interface LanguageToggleProps {
  language: string;
  onLanguageChange: (lang: string) => void;
}

export default function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
      <div className="flex">
        <button
          onClick={() => onLanguageChange('ja')}
          className={`px-3 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 !rounded-button ${
            language === 'ja' 
              ? 'bg-blue-500 text-white' 
              : 'text-white/70 hover:text-white'
          }`}
        >
          JP
        </button>
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-3 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 !rounded-button ${
            language === 'en' 
              ? 'bg-blue-500 text-white' 
              : 'text-white/70 hover:text-white'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
