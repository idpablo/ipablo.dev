import React from 'react';
import { AvatarStyled } from '../../theme/Theme'; // Ajuste o caminho conforme necessário

interface AvatarProps {
  src: string;
  alt: string;
  size?: string; // Permite personalizar o tamanho do avatar
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size }) => {
  return <AvatarStyled src={src} alt={alt} size={size} />;
};

export default Avatar;
