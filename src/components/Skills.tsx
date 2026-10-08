import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 px-6 bg-[var(--bg-surface)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl text-[var(--text-main)] mb-16 text-center"
        >
          Things I <span className="italic text-[#E88BA8]">work with</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(portfolioData.skills).map(([category, skills], index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="text-xl uppercase tracking-widest text-[#C65F83] font-medium mb-8">
                {category}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 justify-center md:justify-start"
              >
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="px-6 py-3 rounded-full border border-[var(--text-main)]/10 bg-[var(--bg-surface)] text-[var(--text-main)] font-medium text-sm transition-all duration-300 cursor-default hover-trigger hover:bg-[var(--bg-alt)] hover:border-[#E88BA8] hover:shadow-[0_4px_15px_-3px_rgba(232,139,168,0.2)]"
                    style={{
                      // Give some pills a slight floating animation offset
                      animation: i % 2 === 0 ? `float 4s ease-in-out infinite` : 'none',
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;
