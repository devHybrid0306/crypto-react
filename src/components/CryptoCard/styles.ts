import styled from 'styled-components';

export const CryptoCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fafbfc;
  border: 1px solid #e1e4e8;
  border-radius: 4.5px;
  width: 301px;
  height: 180px;
  margin-right: 16px;
  margin-bottom: 16px;
  padding: 24px;
  @media (max-width: 760px) {
    width: 265px;
  }
`;

export const DetailContainer = styled.div`
  padding-left: 13px;
`;

export const CryptoName = styled.div`
  color: #444d56;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  padding-top: 5px;
`;

export const CryptoCurrency = styled.div`
  color: #959da5;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  padding-top: 3px;
`;

export const ChangeContainer = styled.div<{ isIncreased: boolean }>`
  color: ${({ isIncreased }) => (isIncreased ? '#88c34a' : '#db4949')};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 16px;
`;

export const ChangeValue = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
`;

export const ChangePercentage = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: 600;
  padding-left: 6px;
`;

export const ChangeLabel = styled.div`
  color: #6a737d;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Divider = styled.div`
  background-color: #e1e4e8;
  width: 200px;
  height: 1.2px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const TradeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TradeValue = styled.div`
  color: #24292e;
  font-size: 14px;
  line-height: 17px;
  font-weight: 600;
  padding-bottom: 3px;
`;

export const TradeLabel = styled.div`
  color: #6a737d;
  font-size: 12px;
  line-height: 15px;
  font-weight: 400;
  text-transform: capitalize;
`;

export const TradeDivider = styled.div`
  background-color: #e1e4e8;
  width: 1.2px;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
`;
