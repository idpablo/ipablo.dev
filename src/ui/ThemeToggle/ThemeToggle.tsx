import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeToggleContainer, ThemeToggleButton } from './ThemeToggle.styles';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <ThemeToggleContainer onClick={onToggle}>
      <ThemeToggleButton isDark={isDark}>
        <FaSun className="icon" />
        <FaMoon className="icon" />
      </ThemeToggleButton>
    </ThemeToggleContainer>
  );
};

export default ThemeToggle;
