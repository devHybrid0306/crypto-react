import React from 'react';

import CryptoIcon from '../CryptoIcon';
import { CircleIconWrapper } from './styles';

interface ICircleIconProps {
  src: string;
  color: string;
  size: number;
}

const CircleIcon: React.FC<ICircleIconProps> = ({ src, color, size }) => {
  return (
    <CircleIconWrapper color={color}>
      <CryptoIcon src={src} size={size} />
    </CircleIconWrapper>
  );
};

export default CircleIcon;
