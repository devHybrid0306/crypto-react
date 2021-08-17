import React from 'react';
import { CustomSearchIcon, Input, SearchInputWrapper } from './styles';

interface ISearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({ onChange }: ISearchInputProps) => {
  return (
    <SearchInputWrapper>
      <CustomSearchIcon />
      <Input type="text" autoFocus={true} onChange={onChange} />
    </SearchInputWrapper>
  );
};

export default SearchInput;
