import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

type Project = typeof portfolioData.projects[0];

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 top-[10vh] md:top-[5vh] md:inset-x-[10vw] lg:inset-x-[15vw] bg-[var(--bg-main)] rounded-t-[40px] md:rounded-[40px] z-[100000] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header / Close Button */}
            <div className="absolute top-6 right-6 z-10">
              <button 
                onClick={onClose}
                className="w-12 h-12 bg-black/20 hover:bg-[#C65F83] backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors duration-300 hover-trigger"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto w-full h-full custom-scrollbar" data-lenis-prevent="true">
              {/* Hero Image */}
              <div className="w-full h-[40vh] md:h-[50vh] relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] to-transparent" />
              </div>

              {/* Content Container */}
              <div className="px-8 md:px-16 py-12 max-w-4xl mx-auto -mt-32 relative z-10">
                <span className="text-6xl md:text-8xl font-serif italic text-[#F7DCE5] opacity-50 block mb-4">
                  {project.id}
                </span>
                
                <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-main)] mb-6">
                  {project.title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-12">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full border border-[#E88BA8]/30 text-sm text-[var(--text-main)] bg-[var(--bg-surface)]">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.details && (
                  <div className="space-y-12">
                    <section>
                      <h3 className="text-sm uppercase tracking-widest text-[#C65F83] font-medium mb-4">The Problem</h3>
                      <p className="text-lg text-[var(--text-main)]/80 leading-relaxed font-light">
                        {project.details.problem}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-sm uppercase tracking-widest text-[#C65F83] font-medium mb-4">Architecture</h3>
                      <p className="text-lg text-[var(--text-main)]/80 leading-relaxed font-light">
                        {project.details.architecture}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-sm uppercase tracking-widest text-[#C65F83] font-medium mb-4">The Solution</h3>
                      <p className="text-lg text-[var(--text-main)]/80 leading-relaxed font-light">
                        {project.details.solution}
                      </p>
                    </section>
                  </div>
                )}

                <div className="mt-16 pt-8 border-t border-[var(--text-main)]/10 pb-20 md:pb-8">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 uppercase tracking-widest text-sm font-medium text-[var(--text-main)] hover:text-[#E88BA8] transition-colors hover-trigger"
                  >
                    Visit Live Project
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
