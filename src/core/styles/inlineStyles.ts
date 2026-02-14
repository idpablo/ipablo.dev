export const TrafficLightColors = {
  red: '#ff5f56',
  yellow: '#ffbd2e',
  green: '#27c93f',
} as const;

export const CommonStyles = {
  cursorPointer: { cursor: 'pointer' } as const,
  borderNone: { border: 'none' } as const,
  boxShadowNone: { boxShadow: 'none' } as const,
  backgroundTransparent: { background: 'transparent' } as const,
  padding0: { padding: 0 } as const,
} as const;

export const InlineStyles = {
  trafficLight: (color: string) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: color,
  }),
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexGap: (gap: string) => ({
    display: 'flex',
    gap,
  }),
} as const;
