import styled from 'styled-components';

export const CryptoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 72px;
`;

export const Container = styled.div<{ isClicked: boolean }>`
  display: flex;
  background-color: ${({ isClicked }) => (isClicked ? '#f5f7ff' : '#ffffff')};
  border-right: 2px solid ${({ isClicked }) => (isClicked ? '#5d6bce' : '#ffffff')};
  flex-direction: row;
  height: 72px;
  padding-left: 16px;
`;

export const CryptoIconWrapper = styled.div`
  margin-top: 20px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  margin-top: 20px;
`;

export const CryptoCurrency = styled.div`
  font-size: 12px;
  color: #24292e;
`;

export const CryptoName = styled.div`
  font-size: 12px;
  color: #6a737d;
`;

export const Divider = styled.div`
  height: 1px;
  width: 90%;
  background-color: #e1e4e8;
  align-self: center;
`;
