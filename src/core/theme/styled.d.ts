import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
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
    };
    config: {
      opacityPrimary: string;
      opacitySecondary: string;
      box_shadow: string;
      box_shadow_card?: string;
    };
  }
}

