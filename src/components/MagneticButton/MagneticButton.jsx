import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './MagneticButton.css';

export default function MagneticButton({ children, className = '', onClick, href, as = 'button', strength = 0.3, ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 20, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = motion[as] || motion.button;

  const motionProps = {
    ref,
    className: `magnetic-btn ${className}`,
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    whileTap: { scale: 0.97 },
    ...props,
  };

  if (href && as === 'a') {
    motionProps.href = href;
  }

  return <Component {...motionProps}>{children}</Component>;
}
