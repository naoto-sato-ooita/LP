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
    <div id="cta-section" className="px-6 py-16">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <div className="bg-gradient-to-br from-blue-600/90 to-cyan-500/90 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30 shadow-2xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            {translations.cta}
          </h2>
          
          <form id="reminder-form" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={translations.email}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm backdrop-blur-sm"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full py-3 bg-gradient-to-r from-white to-blue-100 text-blue-900 font-semibold rounded-xl hover:from-blue-50 hover:to-white transition-all duration-300 disabled:opacity-50 !rounded-button"
            >
              {isSubmitted ? '登録完了！' : translations.submit}
            </button>
          </form>

          {isSubmitted && (
            <div className="mt-4 p-3 bg-green-500/20 border border-green-400/30 rounded-xl text-center">
              <p className="text-green-100 font-medium">
                ありがとうございます！リマインドを設定しました。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}