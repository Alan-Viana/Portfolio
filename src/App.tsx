import { Suspense, lazy, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { ThemeProvider } from '@/context/ThemeContext';
import { BackToTop } from '@/components/ui/BackToTop';
import { NotFound } from '@/components/ui/NotFound';

const About = lazy(() => import('@/components/sections/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('@/components/sections/Projects').then(module => ({ default: module.Projects })));
const Contact = lazy(() => import('@/components/sections/Contact').then(module => ({ default: module.Contact })));
const TechMarquee = lazy(() => import('@/components/sections/TechMarquee').then(module => ({ default: module.TechMarquee })));


function App() {
  const [is404] = useState(() => {
    return window.location.pathname !== '/' && window.location.pathname !== '/index.html';
  });

  if (is404) {
    return <NotFound />;
  }

  return (
    <ThemeProvider>
      <Header />
      <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-300 selection:bg-slate-800 selection:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        
        <main>
          <Hero />
          <Suspense fallback={<div className="min-h-[100dvh]" />}>
            <About />
            <Projects />
            <TechMarquee />
            <Contact />
          </Suspense>
        </main>
      </div>
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
