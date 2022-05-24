import React, { useState } from 'react';
import styled from '@emotion/styled';
import { SolidButton } from '@components/button';

const SearchBar = ({ placeholder, onCallback }) => {
  const [words, setWords] = useState('');

  const setWordState = ({ target }) => {
    setWords(target.value);
  };

  const onSearch = () => {
    if (words == null) return;
    onCallback(words);
    setWords('');
  };

  const handleKeyDown = e => {
    if (e.key == 'Enter') onSearch();
  };

  return (
    <SearchBarContainer>
      <Input type="search" onKeyDown={handleKeyDown} placeholder={placeholder} value={words} onChange={setWordState} />
      <SolidButton onClick={onSearch} className={words == '' ? 'disabled' : 'default'}>
        검색
      </SolidButton>
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
  min-width: 200px;
  outline: none;
`;
