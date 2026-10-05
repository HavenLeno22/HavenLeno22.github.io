import { useMousePosition } from '../../hooks/useMousePosition';
import './MouseSpotlight.css';

export default function MouseSpotlight() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="mouse-spotlight-bg"
      style={{
        '--mouse-x': `${x}px`,
        '--mouse-y': `${y}px`,
      }}
    />
  );
}
