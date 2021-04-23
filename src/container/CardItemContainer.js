import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookmarkToggle } from "../redux/actions/itemActions";
import CardItem from "../components/CardItem";

const CardItemContainer = ({ item }) => {
  const dispatch = useDispatch();
  const id = item.id;
  const itemState = useSelector((state) =>
    state.itemList.data.filter((item) => item.id === id)
  );
  const scrapFilter = useSelector((state) => state.itemList.filter);

  /* Note: state 내부에 아이템 정보가 없고, 스크랩 필터가 켜져있는 경우. 
    아직 불러오지 않은 아이템 목록을 보여줘야 하므로 스크랩 버튼에 true값을 할당합니다. */
  const checked =
    itemState.length !== 0 ? itemState[0].checked : scrapFilter ? true : false;

  const handleOnClick = () => {
    checked || localStorage.setItem(`houseToday${id}`, JSON.stringify(item));
    checked && localStorage.removeItem(`houseToday${id}`);
    dispatch(setBookmarkToggle(id));
  };

  return (
    <CardItem item={item} checked={checked} handleOnClick={handleOnClick} />
  );
};

export default CardItemContainer;
