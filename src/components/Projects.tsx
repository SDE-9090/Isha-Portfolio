import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[var(--bg-main)]" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl text-[var(--text-main)] mb-4"
          >
            Selected <span className="italic text-[#E88BA8]">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-main)]/60 font-light"
          >
            A few things I've had the pleasure of creating.
          </motion.p>
        </div>

        <div className="flex flex-col gap-32">
          {portfolioData.projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center group`}
              >
                {/* Image Container */}
                <div className="w-full md:w-3/5 overflow-hidden rounded-2xl relative shadow-sm transition-transform duration-500 group-hover:-translate-y-2 hover-trigger cursor-pointer">
                  <div className="aspect-[4/3] w-full relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Pink gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#C65F83]/80 via-[#E88BA8]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <span className="text-[var(--text-inverted)] text-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Case Study
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-2/5 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-serif italic text-[#F7DCE5] group-hover:text-[#E88BA8] transition-colors duration-300 group-hover:-translate-y-2 transform block">
                      {project.id}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl font-serif text-[var(--text-main)] mb-4 group-hover:text-[#C65F83] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-[var(--text-main)]/70 font-light mb-8 text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full border border-[#E88BA8]/30 text-sm text-[var(--text-main)]/80 bg-[var(--bg-surface)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 uppercase tracking-widest text-sm font-medium text-[var(--text-main)] hover:text-[#E88BA8] transition-colors hover-trigger w-max"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
