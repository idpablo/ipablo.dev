export type ThemeType = 'light' | 'dark';

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export interface ThemeColors {
  background: string;
  text: string;
  links: string;
  botton: string;
  card?: string;
  border?: string;
  primary: string;
  primaryHover: string;
  textHover: string;
  backgroundBlackHole: string;
}

export interface ThemeConfig {
  opacityPrimary: string;
  opacitySecondary: string;
  box_shadow: string;
  box_shadow_card?: string;
  cardGlow?: string;
  cardGlowHover?: string;
}

export interface Theme {
  colors: ThemeColors;
  config: ThemeConfig;
}
