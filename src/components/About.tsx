import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { TextReveal } from './animations';

const words = ["Backend Engineer", "AI Enthusiast", "Problem Solver", "System Designer"];

const About: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-[var(--bg-surface)]" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="font-serif text-5xl md:text-6xl text-[var(--text-main)] mb-20 text-center md:text-left"
        >
          <TextReveal text="A little bit " />
          <span className="italic text-[#E88BA8]">
            <TextReveal text="about me..." delay={0.2} />
          </span>
        </h2>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left - Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-5/12"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative group">
              <img 
                src={portfolioData.gallery[1]} 
                alt="About me" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#E88BA8]/10 mix-blend-multiply"></div>
            </div>
          </motion.div>

          {/* Right - Bio & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-7/12 flex flex-col justify-center"
          >
            <div className="h-12 mb-6 flex items-center overflow-hidden">
              <p className="text-xl text-[var(--text-main)]/60 uppercase tracking-widest mr-3">I am a</p>
              <motion.div
                key={currentWord}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-serif italic text-[#C65F83]"
              >
                {words[currentWord]}
              </motion.div>
            </div>

            <p className="text-lg text-[var(--text-main)]/80 leading-relaxed mb-12 font-light">
              With a strong foundation in backend development and a passion for artificial intelligence, I specialize in building scalable, production-grade systems. From designing multi-agent LLM workflows to optimizing real-time data pipelines, I believe in creating robust architectures that solve complex problems.
              <br /><br />
              When I'm not writing Python or tuning databases, you can find me listening to music, diving into system design books, or trying out new coffee blends.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#F7DCE5] pt-10">
              <div className="flex flex-col">
                <span className="font-serif text-4xl text-[#E88BA8] mb-2">0{portfolioData.personal.stats.yearsOfExperience}</span>
                <span className="text-sm uppercase tracking-wider text-[var(--text-main)]/60">Years of experience</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-4xl text-[#E88BA8] mb-2">{portfolioData.personal.stats.projects}</span>
                <span className="text-sm uppercase tracking-wider text-[var(--text-main)]/60">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-4xl text-[#E88BA8] mb-2">{portfolioData.personal.stats.technologies}</span>
                <span className="text-sm uppercase tracking-wider text-[var(--text-main)]/60">Technologies</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-4xl text-[#E88BA8] mb-2">0{portfolioData.personal.stats.achievements}</span>
                <span className="text-sm uppercase tracking-wider text-[var(--text-main)]/60">Achievements</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
