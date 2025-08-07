import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Icon from './AppIcon';
import Button from './ui/Button';

const ThemeToggle = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={`p-2 transition-all duration-300 hover:bg-primary/10 ${className}`}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <Icon name="Sun" size={18} color="var(--color-primary)" />
      ) : (
        <Icon name="Moon" size={18} color="var(--color-primary)" />
      )}
    </Button>
  );
};

export default ThemeToggle;