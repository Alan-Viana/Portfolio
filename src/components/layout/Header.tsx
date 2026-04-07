import { useTheme } from '@/context/ThemeContext';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (id: string) => {
    // Check if we are on mobile (lg breakpoint is 1024px)
    const isMobile = window.innerWidth < 1024;
    const wasMenuOpen = isMenuOpen;
    
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
    
    // Only use delay if menu was open on mobile to allow animation to finish
    const delay = (isMobile && wasMenuOpen) ? 400 : 0;
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // Alinhamento exato com o topo da viewport (offset 0)
        // Isso garante que seções de 100vh ocupem exatamente a tela inteira
        // O padding-top das seções cuida do espaçamento visual sob o header
        const headerOffset = 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, delay);
  };

  const navItems = [
    { id: 'about', label: 'Sobre' },
    { id: 'work', label: 'Projetos' },
    { id: 'contact', label: 'Contato' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number]
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 + (i * 0.1),
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number]
      }
    })
  };

  return (
    <>
      {/* 
        HEADER FIXO SIMPLIFICADO
        - Sem animações
        - Z-index máximo
        - Layout Flex simples
      */}
      <header className="fixed top-0 left-0 w-full max-w-[100vw] h-16 z-[9999] bg-white/75 dark:bg-[#050505]/75 backdrop-blur-md border-b border-slate-200 dark:border-transparent overflow-hidden">
        <div className="w-full h-full max-w-7xl mx-auto px-4 flex items-center justify-between relative">
          
          {/* ESQUERDA: Botão Menu (Apenas Mobile/Tablet) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -ml-2 text-slate-900 dark:text-[#33ff33]"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* CENTRO: Logo (Absoluto no mobile para garantir centralização, estático no desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <button 
              onClick={() => handleNavClick('home')} 
              className="text-3xl font-bold font-['VT323'] text-slate-900 dark:text-[#33ff33] glitch-hover relative group"
              data-text="</>"
              aria-label="Voltar ao início"
            >
              {'</>'}
            </button>
          </div>

          {/* CENTRO (Desktop): Navegação Centralizada */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8" aria-label="Menu principal">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-lg font-['W95FA'] text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-[#33ff33] relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 dark:bg-[#33ff33] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* DIREITA: Botão Tema */}
          <div className="flex items-center gap-4">
            {/* Botão Tema (Sempre visível) */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-900 dark:text-[#33ff33]"
              aria-label={theme === 'dark' ? "Mudar para tema claro" : "Mudar para tema escuro"}
            >
              {theme === 'dark' ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-16 left-0 w-screen h-[calc(100dvh-4rem)] z-[9998] bg-white/95 dark:bg-[#050505]/95 backdrop-blur-md lg:hidden flex flex-col items-center justify-start pt-32 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação mobile"
          >
            
            <nav className="flex flex-col items-center w-full gap-8">
              <motion.button
                custom={0}
                variants={itemVariants}
                onClick={() => handleNavClick('home')}
                className="group flex items-center gap-3 px-6 py-2 text-3xl sm:text-4xl font-['W95FA'] text-slate-900 dark:text-[#33ff33] hover:text-pink-600 dark:hover:text-pink-500 transition-colors"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">►</span>
                <span className="group-hover:scale-110 transition-transform duration-300">Início</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">◄</span>
              </motion.button>
              
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  custom={index + 1}
                  variants={itemVariants}
                  onClick={() => handleNavClick(item.id)}
                  className="group flex items-center gap-3 px-6 py-2 text-3xl sm:text-4xl font-['W95FA'] text-slate-900 dark:text-[#33ff33] hover:text-pink-600 dark:hover:text-pink-500 transition-colors"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">►</span>
                  <span className="group-hover:scale-110 transition-transform duration-300">{item.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">◄</span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
