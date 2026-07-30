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
          className="fixed top-16 inset-x-0 w-full max-w-full h-[calc(100dvh-4rem)] z-9998 bg-white/95 backdrop-blur-md lg:hidden flex flex-col items-center justify-start pt-32 overflow-x-clip overflow-y-auto overscroll-x-none touch-pan-y"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <h2 id="mobile-menu-title" className="sr-only">Menu de navegação mobile</h2>

          <nav className="flex w-full flex-col items-stretch gap-8" aria-label="Menu de navegação mobile">
            <motion.button
              type="button"
              custom={0}
              variants={itemVariants}
              onClick={() => onNavigate('home')}
              className="block w-full py-2 text-center text-2xl sm:text-3xl font-mono font-medium text-slate-900 hover:text-pink-600 transition-colors"
            >
              Início
            </motion.button>

            {navItems.map((item, index) => (
              <motion.button
                type="button"
                key={item.id}
                custom={index + 1}
                variants={itemVariants}
                onClick={() => onNavigate(item.id)}
                className="block w-full py-2 text-center text-2xl sm:text-3xl font-mono font-medium text-slate-900 hover:text-pink-600 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
