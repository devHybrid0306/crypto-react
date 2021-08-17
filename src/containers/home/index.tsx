import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { CryptoCard, CryptoList, CryptoIcon } from '../../components';
import { useAppSelector } from '../../redux/hooks';
import { selectCrypto } from '../../redux/slices/crypto/cryptoSlice';
import { ICrypto } from '../../types/crypto';
import {
  BurgerNav,
  CardsContainer,
  CloseWrapper,
  Cryptos,
  CustomArrow,
  CustomClose,
  CustomMenu,
  HomePageWrapper,
  MainContainer,
  RightMenu,
  SideContainer,
  SideTitleContainer,
  Title,
  TitleContainer,
} from './styles';

const HomeScreen = () => {
  const { currentCryptoIds, cryptoList } = useAppSelector(selectCrypto);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [selectedCryptos, setSelectedCryptos] = useState<Array<ICrypto>>([]);
  const [burgerStatus, setBurgerStatus] = useState<boolean>(false);

  useEffect(() => {
    const filteredCryptoList = cryptoList.filter(
      (el) => currentCryptoIds.findIndex((id) => id === el.id) > -1,
    );
    setSelectedCryptos(filteredCryptoList);
  }, [currentCryptoIds]);

  return (
    <HomePageWrapper>
      {isMobile ? (
        <>
          <RightMenu>
            <CustomMenu onClick={() => setBurgerStatus(true)}></CustomMenu>
          </RightMenu>
          <BurgerNav show={burgerStatus}>
            <CloseWrapper>
              <CustomClose onClick={() => setBurgerStatus(false)} />
            </CloseWrapper>
            <CryptoList />
          </BurgerNav>
        </>
      ) : (
        <SideContainer>
          <SideTitleContainer>
            <CustomArrow />
            <Cryptos>Cryptos</Cryptos>
          </SideTitleContainer>
          <CryptoList />
        </SideContainer>
      )}

      <MainContainer>
        <TitleContainer>
          <CryptoIcon src={'https://www.linkpicture.com/q/ic_bitcoin.png'} size={16} />
          <Title>My Cryptos</Title>
        </TitleContainer>
        <CardsContainer>
          {selectedCryptos.map((item) => (
            <CryptoCard key={item.id} {...item} />
          ))}
        </CardsContainer>
      </MainContainer>
    </HomePageWrapper>
  );
};

export default HomeScreen;
