import React from 'react';
import { AvatarStyled } from './Avatar.styles';

interface AvatarProps {
  src: string;
  alt: string;
  size?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size, width, height, style, className }) => {
  return <AvatarStyled src={src} alt={alt} size={size} width={width} height={height} style={style} className={className} />;
};

export default Avatar;
