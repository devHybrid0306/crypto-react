import React from 'react';

import { CryptoIconWrapper } from './styles';

interface ICryptoIconProps {
  src: string;
  size: number;
}

const CryptoIcon: React.FC<ICryptoIconProps> = ({ src, size }) => {
  return <CryptoIconWrapper src={src} size={size} />;
};

export default CryptoIcon;
