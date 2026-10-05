import { useRef, useState } from 'react';
import './TiltCard.css';

export default function TiltCard({ children, className = '', intensity = 10, glare = true }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * intensity;
    const rotateY = (x - 0.5) * intensity;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);

    if (glare) {
      setGlareStyle({
        background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {glare && <div className="tilt-card__glare" style={glareStyle} />}
    </div>
  );
}
