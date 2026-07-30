import type { Transition } from 'framer-motion';

export const transitions: Record<string, Transition> = {
  smooth: {
    type: 'tween',
    ease: [0.25, 0.1, 0.25, 1],
    duration: 0.5,
  },
  windowOpen: {
    type: 'spring',
    stiffness: 250,
    damping: 25,
    mass: 1,
  },
  windowClose: {
    type: 'spring',
    stiffness: 900,
    damping: 40,
    mass: 0.3,
  },
};

export const variants = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { margin: '-50px' },
  },
};
