import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 24px;
  align-items: center;
`;

export const Title = styled.div`
  color: #24292e;
  font-size: 16px;
  line-height: 28px;
  font-weight: 600;
  padding-left: 8px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e4e8;
  height: 100vh;
`;

export const SideTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 24px;
  padding-left: 20px;
  padding-bottom: 24px;
  align-items: center;
`;

export const Cryptos = styled.div`
  color: #444d56;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
`;

export const RightMenu = styled.div`
  display: flex;
  margin-top: 24px;
  padding-left: 5px;
`;

export const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

export const BurgerNav = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: white;
  width: 100%;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.2s;
`;

export const CustomArrow = styled(ArrowBackIosIcon)`
  cursor: pointer;
  color: #959da5;
  width: 16px !important;
  height: 16px !important;
`;

export const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
