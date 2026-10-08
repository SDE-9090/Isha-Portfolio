import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Gallery: React.FC = () => {
  const images = portfolioData.gallery;
  // Fallbacks if data doesn't have enough images
  const safeImages = [
    images[0] || "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    images[1] || "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    images[2] || "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    images[3] || "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
  ];

  return (
    <section className="py-32 px-6 bg-[var(--bg-main)] relative overflow-hidden flex items-center justify-center min-h-screen">
      {/* Background Statement */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 px-4">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-[10vw] md:text-[8vw] leading-[0.9] text-center text-[var(--text-main)]/5 uppercase tracking-tighter"
        >
          Somewhere between <br />
          <span className="italic">ambition</span> & creativity.
        </motion.h2>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full h-[600px] md:h-[700px]">
        {/* Photo 1: Top Left */}
        <motion.div 
          initial={{ opacity: 0, x: -50, y: -50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: -3 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
          className="absolute top-0 left-0 md:left-10 w-48 md:w-64 aspect-[3/4] p-3 bg-[var(--bg-surface)] shadow-xl rounded-sm transition-all duration-300"
        >
          <img src={safeImages[0]} alt="Gallery 1" className="w-full h-full object-cover" />
        </motion.div>

        {/* Photo 2: Center Right (Magazine style) */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 2 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
          className="absolute top-20 right-0 md:right-10 w-56 md:w-80 aspect-[4/5] rounded-lg overflow-hidden shadow-2xl transition-all duration-300"
        >
          <img src={safeImages[1]} alt="Gallery 2" className="w-full h-full object-cover" />
          <div className="absolute inset-0 border border-white/20 m-2"></div>
        </motion.div>

        {/* Photo 3: Bottom Left (Polaroid) */}
        <motion.div 
          initial={{ opacity: 0, y: 50, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: -4 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
          className="absolute bottom-10 left-10 md:left-40 w-40 md:w-56 aspect-[3/4] p-3 pb-12 bg-[var(--bg-surface)] shadow-xl transition-all duration-300"
        >
          <img src={safeImages[2]} alt="Gallery 3" className="w-full h-full object-cover mb-2" />
          <span className="font-serif italic text-sm text-[var(--text-main)]/60 absolute bottom-4 left-0 right-0 text-center">Moments</span>
        </motion.div>

        {/* Photo 4: Bottom Right */}
        <motion.div 
          initial={{ opacity: 0, y: 50, x: 50, rotate: 4 }}
          whileInView={{ opacity: 1, y: 0, x: 0, rotate: 3 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
          className="absolute bottom-0 right-20 md:right-1/4 w-48 md:w-60 aspect-square rounded-full overflow-hidden shadow-lg transition-all duration-300 border-4 border-white"
        >
          <img src={safeImages[3]} alt="Gallery 4" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
