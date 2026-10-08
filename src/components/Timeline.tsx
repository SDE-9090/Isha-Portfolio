import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-32 px-6 bg-[var(--bg-main)]" id="journey">
      <div className="max-w-4xl mx-auto" ref={containerRef}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl text-[var(--text-main)] mb-24 text-center"
        >
          My <span className="italic text-[#E88BA8]">Journey</span>
        </motion.h2>

        <div className="relative">
          {/* Animated center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-[var(--text-main)]/10 hidden md:block" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#E88BA8] hidden md:block"
          />
          
          {/* Mobile line */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-[var(--text-main)]/10 md:hidden" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#E88BA8] md:hidden"
          />

          <div className="flex flex-col gap-16">
            {portfolioData.journey.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between group pl-12 md:pl-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--bg-surface)] border-2 border-[#E88BA8] z-10 transition-transform duration-300 group-hover:scale-150 group-hover:bg-[#E88BA8]" />
                  
                  {/* Left Content (or empty) */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:order-2 md:text-left'}`}>
                    {/* Mobile Year Display (Hidden on Desktop) */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="md:hidden font-serif italic text-3xl text-[var(--color-soft-pink)] mb-4"
                    >
                      {item.year}
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6 }}
                      className="bg-[var(--bg-surface)] p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="text-lg md:text-xl font-serif text-[var(--text-main)] mb-2">{item.title}</h4>
                      <p className="text-[var(--text-main)]/70 font-light text-sm md:text-base">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Desktop Year display (Hidden on Mobile) */}
                  <div className={`hidden md:flex md:w-2/12 justify-center items-center ${isEven ? 'md:order-1' : 'md:order-1'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="font-serif italic text-5xl text-[var(--color-soft-pink)] group-hover:text-[#C65F83] transition-colors duration-500"
                    >
                      {item.year}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
