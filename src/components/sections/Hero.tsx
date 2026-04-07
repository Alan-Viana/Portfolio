import { content } from '@/data/content';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { Typewriter } from '@/components/ui/Typewriter';

export const Hero = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-[100dvh] flex flex-col justify-center relative overflow-hidden bg-slate-50 dark:bg-[#050505] pt-24 pb-20 lg:py-28 2xl:py-32 scroll-mt-28 transition-colors duration-300">
      
      <div className="absolute inset-0 z-0 opacity-40 sm:opacity-30 dark:opacity-25 dark:sm:opacity-[0.15] pointer-events-none text-black dark:text-white"
           style={{
             backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
             backgroundSize: '24px 24px',
             maskImage: theme === 'dark' 
               ? 'linear-gradient(to bottom, black 0%, transparent 60%)' 
               : 'linear-gradient(to bottom, black 20%, transparent 100%)',
             WebkitMaskImage: theme === 'dark' 
               ? 'linear-gradient(to bottom, black 0%, transparent 60%)' 
               : 'linear-gradient(to bottom, black 20%, transparent 100%)'
           }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full relative z-10 text-center">
        
        <div className="space-y-6 sm:space-y-8 flex flex-col items-center">
          <div className="flex flex-col items-center w-full">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-10 mx-auto relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-56 md:h-56 lg:w-44 lg:h-44 2xl:w-52 2xl:h-52 rounded-full overflow-hidden shadow-xl group transition-all duration-300 hover:scale-105 dark:hover:shadow-[0_0_20px_rgba(51,255,51,0.3)] border-4 border-transparent"
            >
              <img 
                src={content.hero.image}
                fetchPriority="high"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x400/e2e8f0/1e293b?text=Foto";
                }}
                alt={content.hero.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-lora font-normal text-slate-900 dark:text-white tracking-normal mb-8 sm:mb-12 lg:mb-16 cursor-default break-words w-full text-center leading-tight px-2 sm:px-4"
            >
              {content.hero.tagline}
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-light text-slate-700 dark:text-[#33ff33] mb-6 sm:mb-8 text-center px-2"
            >
              <Typewriter 
                text={content.hero.role} 
                speed={50} 
                delay={800}
                className="inline-block"
              />
            </motion.div>
            
            {content.hero.intro && (
            <div className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-white font-light max-w-3xl mx-auto leading-relaxed transition-colors text-center min-h-[4rem] px-4">
              <Typewriter  
                text={content.hero.intro} 
                speed={30} 
                delay={500}
              />
            </div>
          )}
        </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full px-4"
          >
            <motion.a 
              href="/Currículo Alan Viana.pdf"
              download="Currículo Alan Viana.pdf"
              className="win95-btn px-6 py-2.5 text-slate-900 dark:text-white dark:hover:text-[#33ff33] font-bold active:translate-y-px active:shadow-none flex items-center justify-center gap-2 w-full sm:w-auto transition-colors duration-200"
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.05 },
                tap: { scale: 0.95 }
              }}
            >
              <motion.svg 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5" 
              >
                <path d="M19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44772 3 5 3H16L20 7V20C20 20.5523 19.5523 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 21V13H7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 3V8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
              {content.hero.buttons.cv}
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-8 mt-8"
          >
            <a href={content.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-[#33ff33] transition-colors transform hover:-translate-y-1">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-9 w-9 md:h-10 md:w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={content.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-[#33ff33] transition-colors transform hover:-translate-y-1">
              <span className="sr-only">GitHub</span>
              <svg className="h-9 w-9 md:h-10 md:w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
