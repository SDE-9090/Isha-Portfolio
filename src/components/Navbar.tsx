import React, { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = async (event: React.MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const doc = document as any;
    if (!doc.startViewTransition) {
      setIsDark(!isDark);
      return;
    }

    const transition = doc.startViewTransition(() => {
      flushSync(() => {
        setIsDark((prev) => !prev);
      });
    });

    await transition.ready;

    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];

    document.documentElement.animate(
      {
        clipPath: clipPath,
      },
      {
        duration: 1200,
        easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-[var(--bg-main)]/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl tracking-wide hover-trigger relative z-50">
          {portfolioData.personal.name}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-sm font-medium uppercase tracking-widest text-[var(--text-main)]/80 hover:text-[#E88BA8] transition-colors relative group hover-trigger"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E88BA8] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Theme Toggle (Desktop) */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg-alt)] hover-trigger relative overflow-hidden"
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 0 : 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sun size={18} className="text-[var(--text-main)]" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 0 : -180, scale: isDark ? 1 : 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Moon size={18} className="text-[var(--text-main)]" />
            </motion.div>
          </button>
        </nav>

        {/* Mobile Toggle & Theme Button */}
        <div className="md:hidden flex items-center gap-4 relative z-50">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg-alt)] relative overflow-hidden"
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 0 : 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sun size={18} className="text-[var(--text-main)]" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 0 : -180, scale: isDark ? 1 : 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Moon size={18} className="text-[var(--text-main)]" />
            </motion.div>
          </button>
          
          <button
            className="p-2 rounded-full bg-[var(--bg-alt)] text-[var(--text-main)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-[var(--bg-main)] z-40 flex flex-col items-center justify-center pt-20 pb-10 px-6"
            >
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="font-serif text-4xl text-[var(--text-main)] hover:text-[#E88BA8] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
