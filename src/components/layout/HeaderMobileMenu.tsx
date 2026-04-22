import { motion, AnimatePresence } from 'framer-motion';

export interface HeaderNavItem {
  id: string;
  label: string;
}

interface HeaderMobileMenuProps {
  isOpen: boolean;
  navItems: HeaderNavItem[];
  onNavigate: (id: string) => void;
}

const menuVariants = {
  closed: {
    opacity: 0,
    y: '-100%',
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
    y: 20,
  },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1 + (i * 0.1),
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  }),
};

export const HeaderMobileMenu = ({ isOpen, navItems, onNavigate }: HeaderMobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed top-16 left-0 w-screen h-[calc(100dvh-4rem)] z-9998 bg-white/95 dark:bg-[#050505]/95 backdrop-blur-md lg:hidden flex flex-col items-center justify-start pt-32 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <h2 id="mobile-menu-title" className="sr-only">Menu de navegação mobile</h2>

          <nav className="flex flex-col items-center w-full gap-8" aria-label="Menu de navegação mobile">
            <motion.button
              type="button"
              custom={0}
              variants={itemVariants}
              onClick={() => onNavigate('home')}
              className="group flex items-center gap-3 px-6 py-2 text-3xl sm:text-4xl font-['W95FA'] text-slate-900 dark:text-[#33ff33] hover:text-pink-600 dark:hover:text-pink-500 transition-colors"
            >
              <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">►</span>
              <span className="group-hover:scale-110 transition-transform duration-300">Início</span>
              <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">◄</span>
            </motion.button>

            {navItems.map((item, index) => (
              <motion.button
                type="button"
                key={item.id}
                custom={index + 1}
                variants={itemVariants}
                onClick={() => onNavigate(item.id)}
                className="group flex items-center gap-3 px-6 py-2 text-3xl sm:text-4xl font-['W95FA'] text-slate-900 dark:text-[#33ff33] hover:text-pink-600 dark:hover:text-pink-500 transition-colors"
              >
                <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">►</span>
                <span className="group-hover:scale-110 transition-transform duration-300">{item.label}</span>
                <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">◄</span>
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};