import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="theme-toggle__icon"
        key={theme}
        initial={{ rotate: -90, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </motion.div>
    </button>
  );
}
