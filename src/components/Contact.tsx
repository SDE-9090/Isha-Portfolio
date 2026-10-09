import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { MagneticButton, TextReveal } from './animations';

const Contact: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-alt)] rounded-b-[40px] relative z-10" id="contact">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <h2 
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--text-main)] mb-8 leading-tight"
        >
          <TextReveal text="Let's build something" /> <br />
          <span className="italic text-[#E88BA8]"><TextReveal text="meaningful." /></span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-[var(--text-main)]/70 font-light mb-16 max-w-lg"
        >
          Have an interesting idea, a technical challenge, or an opportunity? I'd love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-24"
        >
          <MagneticButton>
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="group flex items-center gap-4 bg-[var(--text-main)] text-[var(--bg-main)] px-10 py-5 rounded-full font-medium text-lg hover:bg-[#E88BA8] transition-all duration-300 hover-trigger hover:shadow-xl hover:-translate-y-1"
            >
              Say Hello
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </MagneticButton>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full flex flex-wrap justify-center gap-6 md:gap-12 pt-12 border-t border-[#E88BA8]/20"
        >
          {Object.entries(portfolioData.personal.socials).map(([platform, link]) => (
            <a 
              key={platform}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1 text-[var(--text-main)] uppercase tracking-widest text-sm font-medium hover:text-[#C65F83] transition-colors hover-trigger"
            >
              {platform}
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ))}
          <a 
            href={`mailto:${portfolioData.personal.email}`}
            className="group flex items-center gap-1 text-[var(--text-main)] uppercase tracking-widest text-sm font-medium hover:text-[#C65F83] transition-colors hover-trigger"
          >
            Email
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
