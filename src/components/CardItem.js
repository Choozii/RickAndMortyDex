import React from "react";
import styled from "styled-components";
import bookmarkSelected from "../assets/images/icon_bookmark_selected.svg";
import bookmarkDefault from "../assets/images/icon_bookmark_default.svg";

const ItemCard = styled.div`
  margin: 10px;
`;
const UserProfile = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;
const Nickname = styled.div`
  margin-left: 10px;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
`;
const UserImg = styled.img`
  width: 1.875rem;
  height: 1.875rem;
`;
const Wrapper = styled.div`
  position: relative;
`;
const Item = styled.img`
  width: 16.813rem;
  height: 16.813rem;
  border-radius: 6px;
`;
const Bookmark = styled.img`
  width: 23.33px;
  height: 24.5px;
  right: 12.33px;
  bottom: 12.33px;
  position: absolute;
  cursor: pointer;
`;

const CardItem = ({ item, checked, handleOnClick }) => {
  const { image_url, nickname, profile_image_url } = item;
  let imgSrc = checked ? bookmarkSelected : bookmarkDefault;

  return (
    <ItemCard>
      <UserProfile>
        <UserImg src={profile_image_url} alt="유저 프로필 사진"></UserImg>
        <Nickname>{nickname}</Nickname>
      </UserProfile>
      <Wrapper>
        <Item src={image_url} alt="오늘의 집 아이템 사진"></Item>
        <div onClick={handleOnClick}>
          <Bookmark src={imgSrc} alt="해당 아이템 북마크하기"></Bookmark>
        </div>
      </Wrapper>
    </ItemCard>
  );
};

export default CardItem;
