import './GradientBorder.css';

export default function GradientBorder({ children, className = '', radius = '24px' }) {
  return (
    <div className={`gradient-border-container ${className}`} style={{ borderRadius: radius }}>
      <div className="gradient-border-bg" style={{ borderRadius: radius }}></div>
      <div className="gradient-border-inner" style={{ borderRadius: `calc(${radius} - 1px)` }}>
        {children}
      </div>
    </div>
  );
}
