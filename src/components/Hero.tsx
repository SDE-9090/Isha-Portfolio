import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col justify-center overflow-hidden" id="home">
      
      {/* 
        The background image layer. 
        Using object-contain and object-right ensures the image is never cropped or zoomed in ("too large").
        It aligns to the right, and the left side fades seamlessly into the section's pink background.
      */}
      <div className="absolute inset-0 z-0 bg-[var(--bg-alt)] overflow-hidden">
        {/* Desktop Image: Fades out smoothly on left and top to eliminate hard edges */}
        <img 
          src="/hero.png" 
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
          alt="Hero Background"
          className="hidden md:block w-full h-full object-contain object-right-bottom translate-x-8 lg:translate-x-12 scale-95 origin-bottom-right"
          style={{
            WebkitMaskImage: 'radial-gradient(110% 110% at 100% 100%, black 75%, transparent 100%)',
            maskImage: 'radial-gradient(110% 110% at 100% 100%, black 75%, transparent 100%)'
          }}
        />
      </div>

      {/* Left Content (Clickable HTML text and buttons) */}
      <div className="w-full lg:w-[55%] z-20 relative px-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 md:mt-0"
        >
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <p className="uppercase tracking-widest text-xs md:text-sm text-[var(--text-main)] font-medium tracking-[0.2em]">
              HELLO, I'M <span className="font-bold text-[#C65F83]">{portfolioData.personal.name}</span>
            </p>
            <div className="w-12 md:w-16 h-[1px] bg-[var(--text-main)]/30"></div>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] text-[var(--text-main)] mb-6 md:mb-8 tracking-tight">
            Building <span className="italic text-[#C65F83]">intelligent</span> systems. <br />
            Solving complex problems. <br />
            Creating things that <span className="italic text-[#C65F83]">matter.</span>
          </h1>

          {/* Mobile Image: Inserted inline below the headline */}
          <div className="block md:hidden w-[calc(100%+3rem)] -mx-6 h-[45vh] mb-8 relative">
            <img 
              src="/hero.png" 
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              alt="Hero Portrait"
              className="w-full h-full object-cover object-[70%_top]"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
              }}
            />
          </div>

          <div className="mb-8 md:mb-10">
            <p className="text-base md:text-lg text-[var(--text-main)]/80 max-w-sm font-light text-balance leading-relaxed mb-4">
              {portfolioData.personal.shortBio}
            </p>
            <p className="text-xs md:text-sm font-medium text-[#C65F83] tracking-wide">
              Python · FastAPI · Django · PostgreSQL · AI/ML · AWS
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#work" className="group flex items-center justify-center gap-2 bg-[#d47693] text-[var(--text-inverted)] px-8 py-3.5 rounded-full font-medium hover:bg-[#C65F83] transition-colors duration-300 shadow-sm w-full sm:w-auto">
              Explore My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="group flex items-center justify-center gap-2 bg-transparent border border-[var(--text-main)]/20 text-[var(--text-main)] px-8 py-3.5 rounded-full font-medium hover:border-[var(--text-main)] transition-all duration-300 w-full sm:w-auto">
              Let's Talk
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform opacity-60" />
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
