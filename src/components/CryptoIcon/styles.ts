import styled from 'styled-components';

export const CryptoIconWrapper = styled.img<{ src: string; size: number }>`
  background-image: url(src);
  background-repeat: no-repeat;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;
