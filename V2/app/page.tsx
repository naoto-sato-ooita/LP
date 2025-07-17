'use client';

import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import GameOverview from './components/GameOverview';
import GameFeatures from './components/GameFeatures';
import UserTestimonials from './components/UserTestimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';
import LightningCanvas from './components/LightningCanvas';

export default function Home() {
  const [language, setLanguage] = useState('ja');

  const translations = {
    ja: {
      title: "雷環の封龍士",
      subtitle: "Sealcraft: Lightning Legacy",
      catchphrase: "洞察力で活路を繋げ！",
      story: "100年、勇者たちが命を懸けて封印した龍王。その封印が崩れつつある。龍王の攻撃を搔い潜り、封印回路を完成させよう。",
      features: {
        experience: "異世界で職業体験",
        experienceDesc: "あなたはギルドに所属する封龍士となり、龍王の封印業務にあたります",
        insight: "試される洞察力", 
        insightDesc: "複雑な攻撃パターンを見破り、配置戦略を導き出せ",
        strategy: "広がる戦略",
        strategyDesc: "ステージクリアで得られる材料を集め、新たな道具を作り出そう"
      },
      testimonials: [
        "基本無料",
        "簡単操作", 
        "シンプルだから気楽にできる"
      ],
      cta: "リマインド登録",
      email: "メールアドレス",
      submit: "登録する"
    },
    en: {
      title: "Sealcraft",
      subtitle: "Lightning Legacy",
      catchphrase: "Connect the path with insight!",
      story: "For 100 years, heroes have risked their lives to seal the Dragon King. That seal is beginning to crumble. Evade the Dragon King's attacks and complete the sealing circuit.",
      features: {
        experience: "Fantasy Job Experience",
        experienceDesc: "You become a Dragon Sealer belonging to a guild, tasked with sealing the Dragon King",
        insight: "Test Your Insight",
        insightDesc: "See through complex attack patterns and devise placement strategies", 
        strategy: "Expanding Strategy",
        strategyDesc: "Collect materials from stage clears to craft new tools"
      },
      testimonials: [
        "Free to play",
        "Simple controls",
        "Simple and relaxing"
      ],
      cta: "Reminder Registration", 
      email: "Email Address",
      submit: "Register"
    }
  };

  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      <LightningCanvas />
      
      <div className="relative z-10">
        <div className="fixed top-4 right-4 z-50">
          <LanguageToggle 
            language={language} 
            onLanguageChange={setLanguage}
          />
        </div>

        <HeroSection translations={t} />
        <GameOverview translations={t} />
        <GameFeatures translations={t} />
        <UserTestimonials translations={t} />
        <CTASection translations={t} />
        <Footer />
      </div>
    </div>
  );
}