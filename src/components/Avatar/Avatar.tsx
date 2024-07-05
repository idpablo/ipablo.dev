import React from 'react';
import { AvatarStyled } from '../../theme/Theme';

interface AvatarProps {
  src: string;
  alt: string;
  size?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size }) => {
  return <AvatarStyled src={src} alt={alt} size={size} />;
};

export default Avatar;
