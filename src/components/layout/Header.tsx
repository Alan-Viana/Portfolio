import { useTheme } from '@/context/useTheme';
import { useState, useEffect } from 'react';
import { HeaderMobileMenu, type HeaderNavItem } from '@/components/layout/HeaderMobileMenu';

const navItems: HeaderNavItem[] = [
  { id: 'about', label: 'Sobre' },
  { id: 'work', label: 'Projetos' },
  { id: 'contact', label: 'Contato' },
];

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    const isMobile = window.innerWidth < 1024;
    const wasMenuOpen = isMenuOpen;

    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';

    const delay = (isMobile && wasMenuOpen) ? 400 : 0;

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
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

  return (
    <>
      <header className="fixed top-0 left-0 w-full max-w-[100vw] h-16 z-[9999] bg-white/75 dark:bg-[#050505]/75 backdrop-blur-md border-b border-slate-200 dark:border-transparent overflow-hidden">
        <div className="w-full h-full max-w-7xl mx-auto px-4 flex items-center justify-between relative">

          <div className="lg:hidden flex items-center">
            <button
              type="button"
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

          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <button 
              type="button"
              onClick={() => handleNavClick('home')} 
              className="text-3xl font-bold font-['VT323'] text-slate-900 dark:text-[#33ff33] glitch-hover relative group"
              data-text="</>"
              aria-label="Voltar ao início"
            >
              {'</>'}
            </button>
          </div>

          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8" aria-label="Menu principal">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-lg font-['W95FA'] text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-[#33ff33] relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 dark:bg-[#33ff33] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
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

      <HeaderMobileMenu isOpen={isMenuOpen} navItems={navItems} onNavigate={handleNavClick} />
    </>
  );
};
