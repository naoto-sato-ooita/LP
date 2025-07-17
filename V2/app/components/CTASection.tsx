
'use client';

import { useState, useEffect } from 'react';

interface CTASectionProps {
  translations: any;
}

export default function CTASection({ translations }: CTASectionProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
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

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || email.length === 0) return;

    try {
      const formData = new FormData();
      formData.append('email', email);

      await fetch('https://readdy.ai/api/form-submit', {
        method: 'POST',
        body: formData
      });

      setIsSubmitted(true);
      setEmail('');
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div id="cta-section" className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <div className="bg-gradient-to-br from-blue-600/90 to-cyan-500/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 border border-blue-400/30 shadow-2xl max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-white">
            {translations.cta}
          </h2>
          
          <form id="reminder-form" onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="max-w-md mx-auto">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={translations.email}
                required
                className="w-full px-6 py-4 md:py-5 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-base md:text-lg backdrop-blur-sm"
              />
            </div>
            
            <div className="max-w-md mx-auto">
              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full py-4 md:py-5 bg-gradient-to-r from-white to-blue-100 text-blue-900 font-semibold rounded-xl hover:from-blue-50 hover:to-white transition-all duration-300 disabled:opacity-50 text-base md:text-lg !rounded-button"
              >
                {isSubmitted ? '登録完了！' : translations.submit}
              </button>
            </div>
          </form>

          {isSubmitted && (
            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-green-500/20 border border-green-400/30 rounded-xl text-center max-w-md mx-auto">
              <p className="text-green-100 font-medium text-base md:text-lg">
                ありがとうございます！リマインドを設定しました。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
