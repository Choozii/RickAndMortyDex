import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from '@emotion/styled';
import { color } from '../constants/color';

const SearchInput = () => {
  const [words, setWords] = useState('');
  const history = useHistory();
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

  return (
    <SearchBarContainer>
      <Input
        type="search"
        onKeyUp={() => {
          if (window.event.keyCode === 13) fetchSearchResult();
        }}
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

export default SearchInput;

const SearchBarContainer = styled.div`
  display: flex;
  border-radius: 6px;
`;
const Input = styled.input`
  height: auto;
  border: 1px solid gray;
  width: 250px;
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
