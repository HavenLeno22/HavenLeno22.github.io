/* Shared Framer Motion animation variants */

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const blurIn = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const letterReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const maskReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
  },
};

export const lineGrow = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const cardHover = {
  rest: { y: 0, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
  hover: {
    y: -6,
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const navbarVariants = {
  top: { backdropFilter: 'blur(0px)', backgroundColor: 'transparent' },
  scrolled: {
    backdropFilter: 'blur(20px)',
    backgroundColor: 'rgba(9, 9, 11, 0.8)',
    transition: { duration: 0.3 },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};
