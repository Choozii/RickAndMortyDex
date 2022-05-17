import React from 'react';
import icon_bookmark_default from '@assets/images/icon_bookmark_default.svg';
import icon_bookmark_selected from '@assets/images/icon_bookmark_selected.svg';
import styled from '@emotion/styled';
import { color } from '@constants/color';

const CharacterCard = ({ character, checked, onClickBookmark, onClickCard }) => {
  const { status, name, species, gender } = character;
  return (
    <CardContainer onClick={onClickCard}>
      <ChracterImg src={character.image} alt="사진" />
      <InfoWapper>
        <Label bold={true}>{name}</Label>
        <Label>{species}</Label>
        <Label>{gender}</Label>
      </InfoWapper>
      <StatusColor status={status} />
      {/* <button className={styles.bookmarkButton} onClick={onClickHandle}>
          {checked ? (
            <img alt="아이콘:북마크 선택됨" lassName={styles.bookmarkImg} src={icon_bookmark_selected}></img>
          ) : (
            <img alt="아이콘:북마크 해제됨" className={styles.bookmarkImg} src={icon_bookmark_default}></img>
          )}
        </button>  */}
    </CardContainer>
  );
};

export default CharacterCard;

const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${color.gray[100]};
  border-radius: 8px;
  box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.1);

  :hover {
    cursor: pointer;
    filter: opacity(70%);
  }
`;
const ChracterImg = styled.img`
  border-radius: 8px;
  width: 250px;
  height: 250px;
`;
const Label = styled.span`
  font-size: 14px;
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
  color: ${({ bold }) => (bold ? '#3D3D3D' : '#6F6F6F')};
`;
const StatusColor = styled.div`
  position: absolute;
  background-color: ${({ status }) => (status === 'Alive' ? 'rgb(26, 202, 26)' : 'rgb(219, 141, 38)')};
  right: 20px;
  bottom: 70px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
`;
const InfoWapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
