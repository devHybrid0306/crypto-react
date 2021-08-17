import styled from 'styled-components';

export const CircleIconWrapper = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;
