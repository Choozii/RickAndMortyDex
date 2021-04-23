import React from "react";
import CheckedIcon from "../assets/images/icon_checked.svg";
import UnCheckedIcon from "../assets/images/icon_unchecked.svg";
import styled from "styled-components";

const Checkbox = styled.div`
  margin-bottom: 1.563rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-left: 13%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-left: 8.7%;
  }
  @media screen and (min-width: 1025px) {
    margin-left: 4.775%;
  }
`;
const CheckImg = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: white;
  &:focus {
    background-color: white;
    border: none;
    outline: none;
  }
`;
const Label = styled.div`
  margin-left: 0.625rem;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #2f3438;
`;

const FilteringToggle = ({ handleClick, checked }) => {
  let imgSrc = checked ? CheckedIcon : UnCheckedIcon;
  return (
    <Checkbox>
      <CheckImg onClick={handleClick}>
        <img src={imgSrc} alt="체크박스" />
      </CheckImg>
      <Label>스크랩한 것만 보기</Label>
    </Checkbox>
  );
};

export default FilteringToggle;
