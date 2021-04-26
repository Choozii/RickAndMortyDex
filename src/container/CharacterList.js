import React, {useEffect, useRef, useState, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getItemList} from '../redux/actions/itemActions';
import './CharacterList.css';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState([1,2,3,4,5,6,7,8,9,10,11,12]); //렌더링을 위한 캐릭터 번호 저장
  const storeData = useSelector((state) => state.itemList.data);
  const loading = useSelector(state => state.itemList.loading);
  const observer = useRef();

  useEffect(() => {
    dispatch(getItemList(index));
  }, [index])

  const lastCharacterRef = useCallback(node => {
    if(loading) return ;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {

      if(entries[0].isIntersecting){
        setIndex(index => index.map(elem => elem+12));
      }
    })
    if(node) observer.current.observe(node);
    },[loading]);


  return (
    <div className="AllCharacters">
      
      {
        (storeData.length) === 0
        ?<div>Sorry, there's no Data</div>
        :<></>
      }
      { 
      storeData.map((character, idx) => {
        return (
          storeData.length === idx+1
          ?
          <section ref={lastCharacterRef} className="character_list">
              <CharacterCard idx={idx} character={character}/>
          </section>
          :
          <section className="character_list">
              <CharacterCard idx={idx} character={character}/>
          </section>
        )
    })}
    {
        loading
        ?<div>...loading</div>
        :<></>
      }
    </div>
  );
};


export default CharacterList;