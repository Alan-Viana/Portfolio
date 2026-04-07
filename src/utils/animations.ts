import type { Transition } from 'framer-motion';

export const transitions: Record<string, Transition> = {
  // Spring rápido e responsivo para interações
  spring: {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 0.8
  },
  // Suave para entradas de elementos grandes
  smooth: {
    type: "tween",
    ease: [0.25, 0.1, 0.25, 1.0], // cubic-bezier similar ao ease-out
    duration: 0.5
  },
  // Específico para ABRIR janelas (mais suave e "pesado")
  windowOpen: {
    type: "spring",
    stiffness: 250,
    damping: 25,
    mass: 1
  },
  // Específico para FECHAR janelas (muito rápido e ágil)
  windowClose: {
    type: "spring",
    stiffness: 900,
    damping: 40,
    mass: 0.3
  }
};

export const variants = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { margin: "-50px" }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { margin: "-50px" }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { margin: "-50px" }
  }
};
