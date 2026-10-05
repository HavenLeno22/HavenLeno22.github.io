import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './TextReveal.css';

export default function TextReveal({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.05,
  as = 'div',
  splitBy = 'word' // 'word' or 'char'
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const Component = motion[as] || motion.div;
  
  let elements = [];
  if (splitBy === 'word') {
    elements = text.split(' ').map((word, i) => ({ text: word + '\u00A0', key: i }));
  } else {
    elements = text.split('').map((char, i) => ({ text: char === ' ' ? '\u00A0' : char, key: i }));
  }

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <Component
      ref={ref}
      className={`text-reveal-container ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {elements.map((item, index) => (
        <span className="text-reveal-mask" key={index}>
          <motion.span variants={child} className="text-reveal-inner">
            {item.text}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
