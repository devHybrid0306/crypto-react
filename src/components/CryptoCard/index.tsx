import React from 'react';

import { ICrypto } from '../../types/crypto';
import { isIncreased } from '../../utils/helper';
import CircleIcon from '../CircleIcon';
import {
  ChangeContainer,
  ChangeLabel,
  ChangePercentage,
  ChangeValue,
  CryptoCardWrapper,
  CryptoCurrency,
  CryptoName,
  DetailContainer,
  Divider,
  TradeContainer,
  TradeDivider,
  TradeLabel,
  TradeValue,
} from './styles';

const CryptoCard: React.FC<ICrypto> = (props) => {
  const { src, name, currency, change_value, change_percentage, buy, sell, bkg_color } = props;
  const symbol = isIncreased(change_percentage) ? '▼' : '▲';

  return (
    <CryptoCardWrapper>
      <CircleIcon src={src} color={bkg_color} size={20} />
      <DetailContainer>
        <CryptoName>{name}</CryptoName>
        <CryptoCurrency>{currency}</CryptoCurrency>
        <ChangeContainer isIncreased={isIncreased(change_percentage)}>
          <ChangeValue>{change_value}</ChangeValue>
          <ChangePercentage>{`(${change_percentage}%) ${symbol}`}</ChangePercentage>
        </ChangeContainer>
        <ChangeLabel>change</ChangeLabel>
        <Divider />
        <TradeContainer>
          <div>
            <TradeValue>{buy}</TradeValue>
            <TradeLabel>buy</TradeLabel>
          </div>
          <TradeDivider />
          <div>
            <TradeValue>{sell}</TradeValue>
            <TradeLabel>sell</TradeLabel>
          </div>
        </TradeContainer>
      </DetailContainer>
    </CryptoCardWrapper>
  );
};

export default CryptoCard;
