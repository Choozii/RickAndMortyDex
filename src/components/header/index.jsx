import React from 'react';
import SearchInput from '@components/search_bar/index.jsx';
import styled from '@emotion/styled';
import Checkbox from '@components/check_box/index.jsx';
const Header = ({ handleClick, checked }) => {
  return (
    <HeaderContainer>
      <Checkbox title="즐겨찾기" checked={checked} onClick={handleClick} />
      <SearchInput />
    </HeaderContainer>
  );
};

export default Header;
const HeaderContainer = styled.div`
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
`;
