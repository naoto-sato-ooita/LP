
'use client';

export default function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-12 lg:py-16 border-t border-blue-400/20 max-w-7xl mx-auto">
      <div className="text-center space-y-6 md:space-y-8">
        <div className="text-blue-200">
          <p className="font-semibold text-lg md:text-xl">STADIO KATAOKA</p>
          <p className="text-sm md:text-base">kataoka@sealcraft.app</p>
        </div>
        
        <div className="flex justify-center space-x-8 md:space-x-12 text-sm md:text-base">
          <a 
            href="#privacy" 
            className="text-blue-300 hover:text-blue-100 transition-colors duration-300"
          >
            プライバシーポリシー
          </a>
          <a 
            href="#terms" 
            className="text-blue-300 hover:text-blue-100 transition-colors duration-300"
          >
            利用規約
          </a>
        </div>
        
        <div className="pt-6 md:pt-8 border-t border-blue-400/10">
          <p className="text-xs md:text-sm text-blue-400">
            © 2024 STADIO KATAOKA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
