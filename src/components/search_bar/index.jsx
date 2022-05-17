import React, { useState } from 'react';
import styled from '@emotion/styled';
import { color } from '@constants/color';

const SearchBar = ({ placeholder, onCallback }) => {
  const [words, setWords] = useState('');
  const ENTER_KEY = 13;
  const getWords = e => {
    setWords(e.target.value);
  };
  const onSearch = () => {
    onCallback();
    setWords('');
  };

  const handleKeyDown = () => {
    if (window.event.keyCode === ENTER_KEY) onSearch();
  };

  return (
    <SearchBarContainer>
      <Input type="search" onKeyDown={handleKeyDown} placeholder={placeholder} value={words} onChange={getWords} />
      <SearchButton type="submit" onClick={onSearch}>
        검색
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  display: flex;
  border-radius: 6px;
`;
const Input = styled.input`
  height: auto;
  border: 1px solid gray;
  border-radius: 6px;
  margin-right: 5px;
`;
const SearchButton = styled.button`
  font-weight: 700;
  color: ${color.white};
  padding: 10px 30px;
  background-color: ${color.gray[300]};
  border-radius: 6px;
  border: none;
  outline: none;
  :hover {
    background-color: ${color.gray[600]};
  }
  :active {
    background-color: ${color.gray[400]};
  }
`;
