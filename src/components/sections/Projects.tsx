import { motion } from 'framer-motion';
import { Win95Window } from '@/components/ui/Win95Window';
import { content } from '@/data/content';

export const Projects = () => {
  const projects = content.projects.list;

  const getProjectImage = (project: typeof content.projects.list[0]) => {
    if (project.image && !project.image.startsWith("https://placehold.co")) {
      return project.image;
    }
    
    if (project.deployUrl && project.deployUrl !== "https://vercel.com") {
      return `https://api.microlink.io/?url=${encodeURIComponent(project.deployUrl)}&screenshot=true&meta=false&embed=screenshot.url&waitUntil=networkidle2&waitFor=3000`;
    }
    
    return project.image || "https://placehold.co/600x400/e2e8f0/475569?text=Project";
  };

  return (
    <section id="work" className="min-h-[100dvh] py-20 lg:py-28 2xl:py-32 bg-slate-50 dark:bg-[#050505] transition-colors duration-300 flex flex-col justify-center scroll-mt-28">
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6"
      >
        <div 
          className="flex flex-col items-center justify-center gap-2 mb-8 sm:mb-12 lg:mb-14 2xl:mb-16 pb-4 transition-colors"
        >
          <h2 className="text-4xl xs:text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-lora font-normal text-slate-900 dark:text-white transition-all tracking-tight">{content.projects.sectionTitle}</h2>
          <span className="font-mono text-slate-400 dark:text-[#33ff33] text-xs sm:text-sm transition-colors mt-2">{content.projects.path}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 w-full max-w-5xl mx-auto px-4 md:px-0">
          {projects?.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ 
                opacity: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
                y: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
                scale: { duration: 0.6, ease: "easeOut", delay: index * 0.1 }
              }}
              className="relative z-10 w-full max-w-[500px] mx-auto md:max-w-none"
            >
              <Win95Window 
            icon={null}
            title={project.title} 
            centerTitle={true}
            className="h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 group w-full mx-auto"
            headerClassName="font-w95fa group-hover:bg-slate-700 dark:group-hover:bg-[#33ff33] dark:group-hover:text-black transition-colors py-0.5 text-xs sm:text-sm"
            contentClassName="flex flex-col !p-0 bg-white dark:bg-black"
          >
            <div className="flex flex-col h-full transition-colors duration-300">
              <div className="relative overflow-hidden aspect-video bg-slate-200 dark:bg-zinc-900 border-b-2 border-[#808080] dark:border-[#33ff33]">
                <img 
                  src={getProjectImage(project)} 
                  className="w-full h-full object-cover dark:grayscale dark:contrast-125 transition-transform duration-500 group-hover:scale-105" 
                  alt={project.title} 
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x400/e2e8f0/475569?text=Image+Unavailable";
                    e.currentTarget.onerror = null;
                  }}
                />
                <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
              </div>

              <div className="flex flex-col flex-1 p-3 sm:p-4 text-center">
                <div className="flex flex-col items-center mb-2">
                  <h3 className="font-w95fa text-slate-900 dark:text-[#33ff33] text-xl sm:text-2xl leading-tight transition-colors">{project.title}</h3>
                </div>

                <p className="font-mono text-xs text-black dark:text-slate-300 leading-relaxed mb-4 flex-1 line-clamp-3 transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-col mt-auto gap-4">
                  <div className="flex flex-wrap gap-1 justify-center min-h-[1.5rem]">
                    {project.tags?.slice(0, 3).map(tag => (
                      <span key={tag} className="px-1.5 py-0.5 bg-slate-100 dark:bg-zinc-900 border border-slate-300 dark:border-[#33ff33] text-[10px] sm:text-xs font-mono text-black dark:text-[#33ff33] transition-colors whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center gap-2 mt-2">
                    {project.deployUrl && (
                      <a 
                        href={project.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="win95-btn px-4 py-1.5 text-sm font-bold text-black dark:text-white hover:bg-slate-50 dark:hover:bg-[#33ff33] dark:hover:text-black active:translate-y-px active:shadow-none flex items-center gap-2 shrink-0 transition-colors"
                        aria-label={`Ver deploy do projeto ${project.title}`}
                      >
                        <span>Deploy</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="win95-btn px-3 py-1.5 text-sm font-bold text-black dark:text-white hover:bg-slate-50 dark:hover:bg-[#33ff33] dark:hover:text-black active:translate-y-px active:shadow-none flex items-center justify-center transition-colors"
                        title="Ver Código"
                        aria-label={`Ver código fonte do projeto ${project.title} no GitHub`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                  </div>
                </div>
              </Win95Window>
            </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
};
