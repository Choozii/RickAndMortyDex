import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getItemList} from '../redux/actions/itemActions';
import './CharacterList.css';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  const dispatch = useDispatch();
  const pageNum = useRef(1);
  const [index, setIndex] = useState(1); //렌더링을 위한 캐릭터 번호 저장
  const storeData = useSelector((state) => state.itemList.data);
  const loading = useSelector(state => state.itemList.loading);

  useEffect(() => {
    window.addEventListener("scroll", dispatchPage);
    dispatch(getItemList(getCharacterIndex()));
  }, [])

  //불러올 캐릭터 번호 list 생성
  const getCharacterIndex = () => {

    let characterNumbers = [];
    for(let i=pageNum.current; i<pageNum.current+14;i++){
      characterNumbers.push(i);
    }
    pageNum.current =+ 14;

    return characterNumbers;
  }

  const dispatchPage = () => {
    if (detectScreenEnd() && !loading) {
      let characterNumbers = getCharacterIndex();
      console.log(characterNumbers);
      dispatch(getItemList(characterNumbers))
      .then(() => {})
      .catch(res => console.log(res));
    }
  };

  const renderData = () => {
    if (storeData.length === 0) {
      return <div>Sorry
        <br/>
        There's no Data</div>
    }
    return storeData.map(character => {
      return (
        <section className="character_list">
            <CharacterCard character={character}/>
        </section>
      )
    })
  }

  return (
    <div className="AllCharacters">
      {renderData()}
    </div>
  );
};

function detectScreenEnd() {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) return true;
}

export default CharacterList;