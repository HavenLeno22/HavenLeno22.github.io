import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import './AnimatedCounter.css';

export default function AnimatedCounter({ value, duration = 2000, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const countRef = useRef(0);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutQuart
      const easeOut = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = Math.floor(easeOut * value);
      
      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration, isInView]);

  return (
    <span ref={ref} className="animated-counter">
      {prefix}{count}{suffix}
    </span>
  );
}
