import { content } from '@/data/content';
import { motion } from 'framer-motion';
import { Typewriter } from '@/components/ui/Typewriter';
import { SocialLink } from '@/components/ui/SocialLink';
import { DevLogs } from '@/components/sections/DevLogs';

export const Hero = () => {
  return (
    <section id="home" aria-labelledby="hero-heading" className="min-h-dvh flex flex-col justify-center relative overflow-hidden bg-slate-50 pt-24 pb-20 lg:py-28 2xl:py-32 scroll-mt-28">
      
      <div className="absolute inset-0 z-0 opacity-40 sm:opacity-30 pointer-events-none text-black"
           style={{
             backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
             backgroundSize: '24px 24px',
             maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
             WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'
           }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full relative z-10 -translate-y-4 sm:-translate-y-6 text-center">
        
        <div className="space-y-6 sm:space-y-8 flex flex-col items-center">
          <div className="flex flex-col items-center w-full">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-10 mx-auto relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-64 lg:h-64 2xl:w-72 2xl:h-72 overflow-visible group transition-all duration-300 hover:scale-105"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 512 512"
                className="pointer-events-none absolute inset-0 z-10 block h-full w-full text-slate-50"
              >
                <path
                  fill="currentColor"
                  d="M64 454c32-26 71-47 112-63-25-21-34-53-33-91l3-44c-13-4-19-15-18-29 1-13 9-22 21-20l4-43c5-55 50-89 103-89s99 34 104 89l4 43c12-2 20 7 21 20 1 14-5 25-18 29l3 44c1 38-8 70-33 91 41 16 80 37 112 63H64Z"
                />
              </svg>
              <img 
                src={content.hero.image}
                fetchPriority="high"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x400/e2e8f0/1e293b?text=Foto";
                }}
                alt={content.hero.name} 
                className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
            
            <motion.h1 
              id="hero-heading"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-lora font-normal text-slate-900 tracking-normal mb-6 sm:mb-8 lg:mb-10 cursor-default wrap-break-word w-full text-center leading-tight px-2 sm:px-4"
            >
              {content.hero.tagline}
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-light text-slate-700 mb-6 sm:mb-8 text-center px-2"
            >
              <Typewriter 
                text={content.hero.role} 
                speed={50} 
                delay={800}
                className="inline-block"
              />
            </motion.div>
            
            {content.hero.intro && (
            <div className="text-lg sm:text-xl md:text-2xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed text-center min-h-16 px-4">
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
              href="/Alan_Viana_Sousa_Curriculo.pdf"
              download="Alan_Viana_Sousa_Curriculo.pdf"
              className="win95-btn px-7 py-3 text-slate-900 font-bold active:translate-y-px active:shadow-none flex items-center justify-center gap-2 w-full sm:w-auto transition-colors duration-200"
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
            <SocialLink href={content.social.linkedin} label="Abrir LinkedIn" className="text-slate-900 hover:text-slate-600 transition-colors transform hover:-translate-y-1">
              <svg className="h-9 w-9 md:h-10 md:w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </SocialLink>
            <SocialLink href={content.social.github} label="Abrir GitHub" className="text-slate-900 hover:text-slate-600 transition-colors transform hover:-translate-y-1">
              <svg className="h-9 w-9 md:h-10 md:w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </SocialLink>
          </motion.div>
        </div>

      </div>

      <DevLogs
        title="logs.txt"
        lines={['desenvolvimento web', 'evoluindo a cada projeto']}
        className="hidden xl:block xl:absolute xl:top-[150px] xl:right-[15%] xl:w-[280px] xl:max-w-none xl:px-0 2xl:top-[160px] 2xl:right-[20.5%] 2xl:w-80"
      />
    </section>
  );
};
