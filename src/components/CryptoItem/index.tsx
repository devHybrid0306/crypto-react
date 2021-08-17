import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectNewCrypto } from '../../redux/slices/crypto/cryptoSlice';

import { ICrypto } from '../../types/crypto';
import CryptoIcon from '../CryptoIcon';
import {
  Container,
  CryptoCurrency,
  CryptoIconWrapper,
  CryptoItemWrapper,
  CryptoName,
  DetailWrapper,
  Divider,
} from './styles';

const CryptoItem: React.FC<ICrypto> = (props) => {
  const { currency, name, src, id } = props;
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    dispatch(selectNewCrypto(id));
  };

  return (
    <CryptoItemWrapper onClick={handleClick}>
      <Container isClicked={clicked}>
        <CryptoIconWrapper>
          <CryptoIcon src={src} size={12} />
        </CryptoIconWrapper>
        <DetailWrapper>
          <CryptoCurrency>{currency}</CryptoCurrency>
          <CryptoName>{name}</CryptoName>
        </DetailWrapper>
      </Container>
      <Divider />
    </CryptoItemWrapper>
  );
};

export default CryptoItem;
