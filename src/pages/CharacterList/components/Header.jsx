import React from 'react';
import SearchInput from '@components/search_bar/index.jsx';
import styled from '@emotion/styled';
import { useHistory } from 'react-router';
import Checkbox from '@components/check_box/index.jsx';
import HeaderContainer from '@components/header/index';

const Header = ({ handleClick, checked }) => {
  const history = useHistory();
  const fetchSearchResult = words => {
    history.push({
      pathname: `searching/${words}`,
      state: { words: words },
    });
  };

  return (
    <HeaderContainer>
      <Checkbox title="즐겨찾기" checked={checked} onClick={handleClick} />
      <SearchInput placeholder="캐릭터를 검색해보세요!" onCallback={words => fetchSearchResult(words)} />
    </HeaderContainer>
  );
};

export default Header;
