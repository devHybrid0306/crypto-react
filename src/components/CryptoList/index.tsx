import React, { useState, useEffect } from 'react';
import SearchInput from '../SearchInput';
import { useAppSelector } from '../../redux/hooks';
import { selectCrypto } from '../../redux/slices/crypto/cryptoSlice';
import CryptoItem from '../CryptoItem';
import { CryptoListWrapper } from './styles';
import { ICrypto } from '../../types/crypto';

const CryptoList = () => {
  const { cryptoList } = useAppSelector(selectCrypto);
  const [filtered, setFiltered] = useState<Array<ICrypto>>([]);

  useEffect(() => {
    setFiltered(cryptoList);
  }, [cryptoList]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredCryptoList = cryptoList.filter(
      (el) =>
        el.name.toLowerCase().includes(e.target.value) ||
        el.currency.toLowerCase().includes(e.target.value),
    );
    setFiltered(filteredCryptoList);
  };

  return (
    <CryptoListWrapper>
      <SearchInput onChange={handleChange} />
      {filtered.map((item) => (
        <CryptoItem key={item.id} {...item} />
      ))}
    </CryptoListWrapper>
  );
};

export default CryptoList;
