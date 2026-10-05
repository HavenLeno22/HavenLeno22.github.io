import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './SectionReveal.css';

const directionVariants = {
  up: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
};

export default function SectionReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
  threshold = 0.15,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const variants = directionVariants[direction] || directionVariants.up;

  return (
    <motion.div
      ref={ref}
      className={`section-reveal ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
