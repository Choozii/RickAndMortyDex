import React, {useEffect, useRef, useState, useReducer, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getItemList} from '../redux/actions/itemActions';
import './CharacterList.css';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  const dispatch = useDispatch();
  const [index,setIndex] = useState([1,2,3,4,5,6,7,8,9,10,11,12]); //렌더링을 위한 캐릭터 번호 저장
  const storeData = useSelector((state) => state.itemList.data);
  const loading = useSelector(state => state.itemList.loading);
  const filter = useSelector(state => state.itemList.filter);
  const localStorageString = "RickAndMortyDex";

  const observer = useRef();

  useEffect(() => {
    dispatch(getItemList(index));
  }, [index])

  const getBookmark = () => {
    let bookmarkedCharacters = [];
    for (let key in localStorage) {
      if (key.substring(0, 15) === 'RickAndMortyDex') 
        bookmarkedCharacters.push(localStorage[key])
    }
    let parsedData = []
    for (let character of bookmarkedCharacters) {
      parsedData.push(JSON.parse(character));
    }
    return parsedData;
  };

  const lastCharacterRef = useCallback(node => {
    if (loading) 
      return;
    if (filter) 
      return;
    if (observer.current) 
      observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {

      if (entries[0].isIntersecting) {
        setIndex(index => index.map(elem => elem + 12));
      }
    })
    if (node) 
      observer.current.observe(node);
    }
  , [loading]);

  return (
    <div className="AllCharacters">
      {(storeData.length) === 0
        ? <div>Sorry, there's no Data</div>
        : <></>
      }
      {
      filter
      ?
      <section className="character_list">
        {
          getBookmark().length === 0
          ?<div>There's no bookmarked character<br/> who is your favorate?</div>
          :<></>
        }{
        getBookmark().map(character=>
        <CharacterCard id={character.id} character={character}/ >)
        } 
      </section>
      :
      <section className="character_list">
        {storeData.map((character, idx) => 
        storeData.length === idx+1
        ?<div ref={lastCharacterRef}><CharacterCard  id={idx+1} character={character}/ > </div> : <CharacterCard id={idx + 1} character={character}/>)
        } 
      </section>
      }
      {
        loading
        ?<div>...loading</div> 
        : <></>
      }
    </div>
    )
  }

export default CharacterList;