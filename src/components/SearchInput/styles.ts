import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

export const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 28px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #d1d5da;
  margin-left: 16px;
`;

export const CustomSearchIcon = styled(SearchIcon)`
  color: #6a737d;
  width: 20px !important;
  height: 20px !important;
  padding-left: 10px;
  &:focus {
    border: none;
  }
`;

export const Input = styled.input`
  margin-left: 10px;
  border: none;
  outline: none;
`;
