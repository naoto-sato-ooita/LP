'use client';

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-blue-400/20">
      <div className="text-center space-y-4">
        <div className="text-blue-200">
          <p className="font-semibold">STADIO KATAOKA</p>
          <p className="text-sm">kataoka@sealcraft.app</p>
        </div>
        
        <div className="flex justify-center space-x-6 text-sm">
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
        
        <div className="pt-4 border-t border-blue-400/10">
          <p className="text-xs text-blue-400">
            © 2024 STADIO KATAOKA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}