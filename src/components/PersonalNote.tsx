import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const PersonalNote: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[var(--bg-main)] relative overflow-hidden flex justify-center items-center">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F7DCE5]/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F7DCE5]/30 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full bg-[var(--bg-surface)]/80 backdrop-blur-sm p-10 md:p-20 shadow-[0_20px_60px_-15px_rgba(232,139,168,0.2)] relative border border-white/50"
      >
        <Quote className="absolute top-10 left-10 w-16 h-16 text-[#F7DCE5] opacity-60 pointer-events-none" />
        <Quote className="absolute bottom-10 right-10 w-16 h-16 text-[#F7DCE5] opacity-60 pointer-events-none rotate-180" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-[1px] bg-[var(--text-main)]/30"></div>
            <h2 className="uppercase tracking-widest text-sm text-[#C65F83] font-medium tracking-[0.2em]">
              A Personal Note
            </h2>
            <div className="w-10 h-[1px] bg-[var(--text-main)]/30"></div>
          </div>
          
          <p className="font-serif text-3xl md:text-5xl text-[var(--text-main)] leading-[1.3] mb-12">
            "I believe that the best systems are <span className="italic text-[#C65F83]">beautiful</span> on the inside and <span className="italic text-[#C65F83]">seamless</span> on the outside."
          </p>
          
          <p className="text-lg md:text-xl text-[var(--text-main)]/70 max-w-2xl font-light text-balance leading-relaxed mb-12">
            Thanks for stopping by my portfolio. I'm always open to discussing new opportunities, whether it's building complex AI workflows, optimizing backend systems, or just geeking out over elegant architecture.
          </p>
          
          <div className="flex flex-col items-center">
            <p className="font-serif italic text-3xl text-[var(--text-main)]">Isha Thakur</p>
            <p className="text-sm uppercase tracking-widest text-[var(--text-main)]/40 mt-3 font-medium">Software Engineer</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PersonalNote;
