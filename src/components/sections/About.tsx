import { motion, AnimatePresence } from 'framer-motion';
import { Win95Window } from '@/components/ui/Win95Window';
import { content } from '@/data/content';
import { useWindowLogic } from '@/hooks/useWindowLogic';
import { transitions } from '@/utils/animations';
import { useState } from 'react';

export const About = () => {
  const { 
    expandedValue: isExpanded, 
    exitMethod, 
    handleOpen, 
    handleClose, 
    handleRestore, 
    handleMinimize 
  } = useWindowLogic(false);

  const initialText = [
    content.about.shortBio.intro,
    content.about.shortBio.stackTitle,
    content.about.shortBio.stack?.join('\n')
  ].filter(Boolean).join('\n\n');

  const [bioText, setBioText] = useState(initialText);

  return (
    <section id="about" className="min-h-[100dvh] py-24 md:py-32 lg:py-28 2xl:py-32 bg-white dark:bg-[#050505] relative transition-colors duration-300 flex flex-col justify-center scroll-mt-0">
      <div 
        className="w-full mx-auto px-4 sm:px-6 md:px-8"
      >
        <div className="flex flex-col items-center gap-12 w-full max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ 
              type: "tween",
              ease: "easeOut",
              duration: 0.8,
              delay: 0.2 
            }}
            className="text-center"
          >
            <h2 className="text-4xl xs:text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-lora font-normal text-slate-900 dark:text-white transition-colors tracking-normal">
              Sobre <span className="text-slate-400 dark:text-[#33ff33] dark:opacity-100">Mim.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6 sm:gap-8 w-full">
            <motion.div 
              layoutId="bio-window" 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                layout: transitions.windowClose,
                opacity: { duration: 0.8, ease: "easeOut" },
                x: { duration: 0.8, ease: "easeOut" }
              }}
              className="w-full max-w-[800px] mx-auto relative z-10 will-change-transform"
            >
              <Win95Window 
                title={content.about.windowTitle} 
                className="w-full shadow-[8px_8px_0_rgba(0,0,0,0.2)]"
                headerClassName="dark:!bg-[#33ff33] dark:!text-black"
                buttonClassName="text-black dark:text-white"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                }
                contentClassName="bg-white dark:bg-black dark:text-[#33ff33] transition-colors p-2 sm:p-4"
                onMinimize={() => {}}
                onMaximize={() => handleOpen(true)}
                onClose={() => {}}
              >
                <textarea 
                  value={bioText}
                  onChange={(e) => setBioText(e.target.value)}
                  className="w-full h-64 xs:h-72 sm:h-[40vh] md:h-[45vh] lg:h-[50vh] bg-transparent border-none outline-none font-mono text-xs xs:text-sm sm:text-base resize-none p-1 sm:p-2 focus:ring-0 leading-relaxed custom-scrollbar text-slate-900 dark:text-[#33ff33]"
                  spellCheck={false}
                  aria-label="Bio text editor"
                />
              </Win95Window>
            </motion.div>

            <motion.button 
              onClick={() => handleOpen(true)}
              className="win95-btn px-6 py-2.5 text-slate-900 dark:text-[#33ff33] font-bold active:translate-y-[1px] flex items-center justify-center gap-2 mt-4 mx-auto"
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.05 },
                tap: { scale: 0.95 }
              }}
            >
              <img src="/notepad.png" alt="Notepad Icon" className="w-5 h-5 dark:grayscale" />
              Abrir Bio
            </motion.button>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                initial={{ backgroundColor: "rgba(0,0,0,0)" }}
                animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                exit={{ backgroundColor: "rgba(0,0,0,0)", transition: { duration: 0.1 } }}
                className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
                role="dialog"
                aria-modal="true"
                aria-label={content.about.windowTitle}
                onClick={() => handleClose(false)}
              >
                <motion.div 
                  layoutId={exitMethod === 'morph' ? "bio-window" : undefined}
                  transition={transitions.windowOpen}
                  exit={exitMethod === 'fade' ? { opacity: 0, scale: 0.95, transition: { duration: 0.2 } } : undefined}
                  className="w-full max-w-6xl h-[85dvh] shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Win95Window 
                    title={content.about.windowTitle} 
                    className="w-full h-full shadow-[12px_12px_0_rgba(0,0,0,0.4)]"
                    headerClassName="dark:!bg-[#33ff33] dark:!text-black"
                    buttonClassName="text-black dark:text-white"
                    icon={
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    }
                    contentClassName="bg-white dark:bg-black dark:text-[#33ff33] transition-colors overflow-y-auto"
                    onMaximize={() => handleRestore(false)}
                    onMinimize={() => handleMinimize(false)}
                    onClose={() => handleClose(false)}
                    isMaximized={true}
                  >
                    <div className="font-mono text-lg leading-relaxed whitespace-pre-wrap p-6">
                      
                      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto mt-12">
                        <div className="flex flex-col">
                          <h3 className="text-lg font-bold mb-6 underline decoration-wavy text-center lg:text-left">{content.about.fullBio.backgroundTitle}</h3>
                          <div className="space-y-4 text-justify">
                            {content.about.fullBio.background?.map((paragraph, idx) => (
                              <p key={idx} className="leading-relaxed">{paragraph}</p>
                            )) || <p className="leading-relaxed">Conteúdo não disponível.</p>}
                          </div>
                        </div>

                        <div className="flex flex-col gap-10">
                          <div>
                            <h3 className="text-lg font-bold mb-6 underline decoration-wavy text-center lg:text-left">{content.about.fullBio.educationTitle}</h3>
                            <ul className="space-y-4">
                              {content.about.fullBio.education?.map((item, idx) => (
                                <li key={idx} className="text-sm sm:text-base flex items-start gap-3 bg-white dark:bg-black p-3 rounded border border-slate-100 dark:border-slate-800 shadow-sm">
                                  <span className="inline-block w-2 h-2 rounded-full bg-slate-400 dark:bg-[#33ff33] mt-2 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-lg font-bold mb-6 underline decoration-wavy text-center lg:text-left">{content.about.fullBio.skillsTitle}</h3>
                            <ul className="space-y-3">
                              {content.about.fullBio.skills?.map((skill, idx) => (
                                <li key={idx} className="text-base text-slate-800 dark:text-slate-200">
                                  <strong className="font-bold text-slate-900 dark:text-[#33ff33]">{skill.label}</strong>
                                  <br className="sm:hidden" />
                                  <span className="sm:ml-2 text-slate-600 dark:text-slate-400">{skill.items}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <span className="hidden dark:inline-block w-2.5 h-5 bg-[#33ff33] mt-4 animate-pulse align-middle"></span>
                    </div>
                  </Win95Window>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
