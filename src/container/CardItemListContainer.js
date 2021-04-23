import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemList, setBookmarkTrue } from "../redux/actions/itemActions";
import CardItem from "./CardItemContainer";

const CardItemList = () => {
  const dispatch = useDispatch();
  const pageNum = useRef(1);
  const loading = useSelector((state) => state.itemList.loading);
  const itemList = useSelector((state) => state.itemList);
  const errorMsg = useSelector((state) => state.errorMsg);
  const filter = useSelector((state) => state.itemList.filter);

  useEffect(() => {
    window.addEventListener("scroll", dispatchPage);
    dispatch(getItemList(pageNum.current)).then(() => {
      const bookmarkids = getBookmarkIDs();
      bookmarkids.map((id) => dispatch(setBookmarkTrue(id)));
    });
  }, []);

  const getBookmarkIDs = () => {
    const Keys = Object.keys(localStorage);
    let bookmarkIDs = [];
    for (let idx in Keys) {
      /*Note : 로컬 스토리지에 저장된 데이터 중 
      오늘의집과 관련된 데이터만 불러오기 위한 필터링 작업입니다.*/
      if (Keys[idx].indexOf("houseToday") !== -1)
        bookmarkIDs.push(Keys[idx].substring(10));
    }
    return bookmarkIDs;
  };

  const dispatchPage = () => {
    if (detectScreenEnd() && !loading) {
      pageNum.current += 1;
      dispatch(getItemList(pageNum.current)).then(() => {
        const bookmarkids = getBookmarkIDs();
        bookmarkids.map((id) => dispatch(setBookmarkTrue(id)));
      });
    }
  };

  const display = () => {
    if (loading === false && errorMsg) return <></>;

    if (filter === true) {
      const bookmarkIDs = getBookmarkIDs();
      let bookmarkedItems = [];
      bookmarkIDs.map((id) =>
        bookmarkedItems.push(localStorage.getItem(`houseToday${id}`))
      );

      if (bookmarkedItems.length === 0)
        return (
          <ItemList>
            <BookmarkEmpty>현재 스크랩된 제품이 없습니다</BookmarkEmpty>
          </ItemList>
        );

      return (
        <FilteredList>
          {bookmarkedItems.map((itemInfo) => {
            let jsonItem = JSON.parse(itemInfo);
            return <CardItem key={jsonItem.id} item={jsonItem} />;
          })}
        </FilteredList>
      );
    }

    return (
      <ItemList>
        {itemList.data.map((itemInfo) => (
          <CardItem key={itemInfo.id} item={itemInfo} />
        ))}
      </ItemList>
    );
  };
  return <Wrapper>{display()}</Wrapper>;
};

function detectScreenEnd() {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) return true;
}

export default CardItemList;
