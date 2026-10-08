import React from 'react';
import { portfolioData } from '../data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--bg-main)] py-8 px-6 -mt-10 pt-16 relative z-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-serif text-2xl tracking-wide text-[var(--text-main)]">
          {portfolioData.personal.name}
        </div>
        
        <div className="text-sm font-medium uppercase tracking-widest text-[var(--text-main)]/60 text-center">
          Available for opportunities
        </div>
        
        <div className="flex items-center gap-4 text-sm text-[var(--text-main)]/60">
          <span>© {new Date().getFullYear()} {portfolioData.personal.name}</span>
          <span className="hidden md:inline">•</span>
          <span>Made with ♡</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
