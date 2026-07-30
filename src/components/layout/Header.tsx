import { useState, useEffect } from 'react';
import { HeaderMobileMenu, type HeaderNavItem } from '@/components/layout/HeaderMobileMenu';

const navItems: HeaderNavItem[] = [
  { id: 'about', label: 'Sobre' },
  { id: 'work', label: 'Projetos' },
  { id: 'contact', label: 'Contato' },
];

export const Header = () => {
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
      <header className="fixed top-0 left-0 w-full h-16 z-[9999] bg-white/75 backdrop-blur-md border-b border-slate-200 overflow-x-clip">
        <div className="w-full h-full max-w-7xl mx-auto px-4 flex items-center justify-between relative">

          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -ml-2 text-slate-900"
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
              className="text-3xl font-bold font-['VT323'] text-slate-900 glitch-hover relative group"
              data-text="</>"
              aria-label="Voltar ao início"
            >
              {'</>'}
            </button>
          </div>

          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-12" aria-label="Menu principal">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-lg font-['W95FA'] text-slate-600 hover:text-slate-900 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

        </div>
      </header>

      <HeaderMobileMenu isOpen={isMenuOpen} navItems={navItems} onNavigate={handleNavClick} />
    </>
  );
};
