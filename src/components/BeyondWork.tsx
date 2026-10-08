import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const BeyondWork: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[var(--bg-surface)] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl text-[var(--text-main)] mb-4"
          >
            Beyond the <span className="italic text-[#E88BA8]">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-main)]/60 font-light"
          >
            A few things that make me, me.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {portfolioData.interests.map((interest, index) => {
            const randomRotation = (index % 2 === 0 ? 1 : -1) * (Math.random() * 4 + 2);
            return (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, scale: 0.8, rotate: randomRotation }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  type: "spring", 
                  stiffness: 100 
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 0, 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(232, 139, 168, 0.1), 0 10px 10px -5px rgba(232, 139, 168, 0.04)"
                }}
                className="bg-[var(--bg-main)] border border-[#E88BA8]/20 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 w-36 h-36 md:w-48 md:h-48 cursor-pointer transition-all duration-300"
              >
                <span className="text-4xl md:text-5xl text-[#C65F83] group-hover:scale-110 transition-transform">{interest.icon}</span>
                <span className="font-serif italic text-lg md:text-xl text-[var(--text-main)]">{interest.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BeyondWork;
