import { motion } from 'framer-motion';
import { content } from '@/data/content';
import type { ProjectItem } from '@/data/content';
import { ProjectCard } from '@/components/sections/ProjectCard';

export const Projects = () => {
  const projects = content.projects.list;

  const getProjectImage = (project: ProjectItem) => {
    if (project.image && !project.image.startsWith("https://placehold.co")) {
      return project.image;
    }
    
    if (project.deployUrl && project.deployUrl !== "https://vercel.com") {
      return `https://api.microlink.io/?url=${encodeURIComponent(project.deployUrl)}&screenshot=true&meta=false&embed=screenshot.url&waitUntil=networkidle2&waitFor=3000`;
    }
    
    return project.image || "https://placehold.co/600x400/e2e8f0/475569?text=Project";
  };

  return (
    <section id="work" aria-labelledby="projects-heading" className="min-h-dvh py-20 lg:py-28 2xl:py-32 bg-slate-50 flex flex-col justify-center scroll-mt-28">
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6"
      >
        <div 
          className="flex flex-col items-center justify-center gap-2 mb-8 sm:mb-12 lg:mb-14 2xl:mb-16 pb-4 transition-colors"
        >
          <h2 id="projects-heading" className="text-4xl xs:text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-lora font-normal text-slate-900 tracking-tight">{content.projects.sectionTitle}</h2>
          <span className="font-mono text-slate-400 text-xs sm:text-sm mt-2">{content.projects.path}</span>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 w-full max-w-5xl mx-auto" role="list">
          {projects.map((project, index) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                opacity: { duration: 0.6, ease: 'easeOut', delay: index * 0.1 },
                y: { duration: 0.6, ease: 'easeOut', delay: index * 0.1 },
                scale: { duration: 0.6, ease: 'easeOut', delay: index * 0.1 },
              }}
              className="relative z-10 w-full max-w-125 mx-auto md:max-w-none"
            >
              <ProjectCard project={project} imageSrc={getProjectImage(project)} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
