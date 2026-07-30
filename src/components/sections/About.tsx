import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Win95Window } from '@/components/ui/Win95Window';
import { content } from '@/data/content';
import { transitions } from '@/utils/animations';

const StackIcon = ({ stack }: { stack: string }) => {
  if (stack === '- React') {
    return (
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5 shrink-0 text-sky-500" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="16" cy="16" rx="13" ry="5.5" />
        <ellipse cx="16" cy="16" rx="13" ry="5.5" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="13" ry="5.5" transform="rotate(120 16 16)" />
        <circle cx="16" cy="16" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (stack === '- TypeScript') {
    return (
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5 shrink-0" role="img">
        <rect width="32" height="32" rx="3" fill="#3178C6" />
        <text x="5" y="23" fill="white" fontSize="15" fontWeight="700" fontFamily="Arial, sans-serif">TS</text>
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5 shrink-0" role="img">
      <path d="M16 2 28 9v14l-12 7L4 23V9l12-7Z" fill="#5FA04E" />
      <text x="7" y="20" fill="white" fontSize="9" fontWeight="700" fontFamily="Arial, sans-serif">Node</text>
    </svg>
  );
};

export const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [exitMethod, setExitMethod] = useState<'morph' | 'fade'>('morph');

  const openBio = () => {
    setExitMethod('morph');
    setIsExpanded(true);
  };

  const closeBio = (method: 'morph' | 'fade' = 'morph') => {
    setExitMethod(method);
    setIsExpanded(false);
  };

  return (
    <section id="about" className="min-h-dvh py-24 md:py-32 lg:py-28 2xl:py-32 bg-white relative flex flex-col justify-center scroll-mt-0">
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
            <h2 className="text-4xl xs:text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-lora font-normal text-slate-900 tracking-normal">
              Sobre <span className="text-slate-400">Mim.</span>
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
                buttonClassName="text-black"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                }
                contentClassName="bg-white p-2 sm:p-4"
                onMinimize={() => {}}
                onMaximize={openBio}
                onClose={() => {}}
              >
                <div className="h-64 xs:h-72 sm:h-[40vh] md:h-[45vh] lg:h-[50vh] overflow-y-auto p-2 sm:p-3 font-mono text-sm xs:text-base sm:text-lg leading-relaxed text-slate-900 custom-scrollbar">
                  <p>{content.about.shortBio.intro}</p>
                  <p className="mt-6 text-base xs:text-lg sm:text-xl font-semibold">{content.about.shortBio.stackTitle}</p>
                  <ul className="mt-3 space-y-3 text-base xs:text-lg sm:text-xl" aria-label="Tecnologias principais">
                    {content.about.shortBio.stack?.map((stack) => (
                      <li key={stack} className="grid grid-cols-[0.5rem_1.25rem_minmax(0,1fr)] items-center gap-x-2">
                        <span aria-hidden="true" className="leading-none">-</span>
                        <StackIcon stack={stack} />
                        <span className="leading-snug">{stack.replace('- ', '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Win95Window>
            </motion.div>

            <motion.button 
              onClick={openBio}
              className="win95-btn px-6 py-2.5 text-slate-900 font-bold active:translate-y-[1px] flex items-center justify-center gap-2 mt-4 mx-auto"
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.05 },
                tap: { scale: 0.95 }
              }}
            >
              <img src="/notepad.png" alt="Notepad Icon" className="w-5 h-5" />
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
                onClick={() => closeBio()}
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
                    buttonClassName="text-black"
                    icon={
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    }
                    contentClassName="bg-white overflow-y-auto"
                    onMaximize={() => closeBio()}
                    onMinimize={() => closeBio('fade')}
                    onClose={() => closeBio()}
                    isMaximized={true}
                  >
                    <div className="font-mono text-base sm:text-lg leading-relaxed whitespace-pre-wrap p-4 sm:p-6">
                      
                      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto mt-6 sm:mt-12">
                        <div className="flex flex-col">
                          <h3 className="text-lg sm:text-xl font-bold mb-6 underline decoration-solid text-center lg:text-left">{content.about.fullBio.backgroundTitle}</h3>
                          <div className="space-y-4 text-left sm:text-justify">
                            {content.about.fullBio.background?.map((paragraph, idx) => (
                              <p key={idx} className="leading-relaxed">{paragraph}</p>
                            )) || <p className="leading-relaxed">Conteúdo não disponível.</p>}
                          </div>
                        </div>

                        <div className="flex flex-col gap-10">
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-6 underline decoration-solid text-center lg:text-left">{content.about.fullBio.educationTitle}</h3>
                            <ul className="space-y-4">
                              {content.about.fullBio.education?.map((item, idx) => (
                                <li key={idx} className="text-sm sm:text-base flex items-start gap-3 bg-white p-3 rounded border border-slate-100 shadow-sm">
                                  <span className="inline-block w-2 h-2 rounded-full bg-slate-400 mt-2 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-6 underline decoration-solid text-center lg:text-left">{content.about.fullBio.skillsTitle}</h3>
                            <ul className="space-y-3">
                              {content.about.fullBio.skills?.map((skill, idx) => (
                                <li key={idx} className="text-base text-slate-800">
                                  <strong className="font-bold text-slate-900">{skill.label}</strong>
                                  <br className="sm:hidden" />
                                  <span className="sm:ml-2 text-slate-600">{skill.items}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
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
