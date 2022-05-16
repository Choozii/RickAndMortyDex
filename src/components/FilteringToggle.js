import React from 'react';
import CheckedIcon from '../assets/images/icon_checked.svg';
import UnCheckedIcon from '../assets/images/icon_unchecked.svg';
import styles from './FilteringToggle.module.css';
import SearchInput from './SearchInput';
import styled from '@emotion/styled';

const FilteringToggle = ({ handleClick, checked }) => {
  let imgSrc = checked ? CheckedIcon : UnCheckedIcon;

  return (
    <HeaderContainer>
      <CheckBoxWrapper>
        <Checkbox src={imgSrc} onClick={handleClick} alt="버튼 : 체크박스" />
        <Label>즐겨찾기</Label>
      </CheckBoxWrapper>
      <SearchInput />
    </HeaderContainer>
  );
};

export default FilteringToggle;
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
const Checkbox = styled.img`
  all: unset;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
const CheckBoxWrapper = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`;
const Label = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
`;
