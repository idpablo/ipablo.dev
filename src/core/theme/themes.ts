import { Theme } from '../types';

export const lightTheme: Theme = {
  colors: {
    background: '#FBF7FF',
    text: '#1A1230',
    links: '#6C4CF0',
    botton: '#FFFFFF',
    card: '#FFFFFF',
    border: 'rgba(16,12,35,0.06)',
    primary: '#6C4CF0',
    primaryHover: '#5A2FE6',
    textHover: '#ffffff',
    backgroundBlackHole: '#FBF7FF',
  },
  config: {
    opacityPrimary: '0.6',
    opacitySecondary: '0',
    box_shadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    box_shadow_card: '0 8px 30px rgba(16,12,35,0.06)',
    cardGlow: '0 4px 10px rgba(0, 0, 0, 0.08)',
    cardGlowHover: '0 8px 18px rgba(0, 0, 0, 0.14)',
  },
};

export const darkTheme: Theme = {
  colors: {
    background: '#0B0620',
    text: '#EDE9FF',
    links: '#9B8CFF',
    botton: '#120A2A',
    card: '#120A2A',
    border: 'rgba(255,255,255,0.04)',
    primary: '#9B8CFF',
    primaryHover: '#7D63FF',
    textHover: '#0B0620',
    backgroundBlackHole: '#0B0620',
  },
  config: {
    opacityPrimary: '0.6',
    opacitySecondary: '0',
    box_shadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    box_shadow_card: '0 10px 40px rgba(0, 0, 0, 0.6)',
    cardGlow: '0 4px 10px rgba(0, 0, 0, 0.4)',
    cardGlowHover: '0 8px 18px rgba(0, 0, 0, 0.5)',
  },
};
