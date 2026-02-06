import styled from 'styled-components';

export const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ThemeToggleButton = styled.div<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 56px;
  height: 28px;
  padding: 4px;
  border-radius: 14px;
  position: relative;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  background: ${({ theme, isDark }) => isDark ? theme.colors.primary : '#E0E0E0'};
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.botton};

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease;
    background: #FFFFFF;
    left: ${({ isDark }) => (isDark ? 'calc(100% - 28px)' : '4px')};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .icon {
    position: absolute;
    font-size: 0.9rem;
    transition: color 0.3s ease;
    
    &:first-child {
      left: 8px;
      color: ${({ isDark }) => isDark ? 'transparent' : '#FFB800'};
    }
    
    &:last-child {
      right: 8px;
      color: ${({ isDark }) => isDark ? '#58B6FF' : 'transparent'};
    }
  }

  &:hover {
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(107, 76, 240, 0.2);
  }
`;

