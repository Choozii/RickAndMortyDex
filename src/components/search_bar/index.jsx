import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from '@emotion/styled';
import { color } from '@constants/color';

const SearchBar = () => {
  const [words, setWords] = useState('');
  const history = useHistory();
  const ENTER_KEY = 13;
  const getWords = e => {
    setWords(e.target.value);
  };
  const fetchSearchResult = () => {
    setWords('');
    history.push({
      pathname: `searching/${words}`,
      state: { words: words },
    });
  };
  const handleKeyDown = () => {
    if (window.event.keyCode === ENTER_KEY) fetchSearchResult();
  };
  return (
    <SearchBarContainer>
      <Input
        type="search"
        onKeyDown={handleKeyDown}
        placeholder="캐릭터를 검색해보세요!"
        value={words}
        onChange={getWords}
      />
      <SearchButton type="submit" onClick={fetchSearchResult}>
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
  width: 50%;
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
