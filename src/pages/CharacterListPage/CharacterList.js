import React, {useEffect, useRef, useState, useReducer, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getItemList} from '../../redux/actions/itemActions'
import styles from './CharacterList.module.css';
import CharacterCardContainer from '../../container/CharacterCardContainer';
import FilteringToggleContainer from '../../container/FilteringToggleContainer';

const CharacterList = () => {
  const dispatch = useDispatch();
  const [index,setIndex] = useState(); //렌더링을 위한 캐릭터 번호 저장
  const storeData = useSelector((state) => state.itemList.data);
  const loading = useSelector(state => state.itemList.loading);
  const error = useSelector(state => state.itemList.error);
  const filter = useSelector(state => state.itemList.filter);
  const observer = useRef();
  let fetchIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; 
  
  useEffect(()=>{
    //화면에 처음 접속한 경우
    if(storeData.length === 0)
      setIndex(fetchIndex);
    //다른 화면에서 돌아온 경우는 스토어 내부의 데이터 길이를 참조해서 인덱스를 구함
    else if(storeData.length !== 0){
      fetchIndex = fetchIndex.map(idx => idx+storeData.length+1)
      setIndex(fetchIndex);
    }
  },[])

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
    <>
     <FilteringToggleContainer/>
    <div className={styles.wrapper}>
      {(storeData.length) === 0
        ? <div>Sorry, there's no Data</div>
        : <></>}
      {
      filter
      ?(<section className={styles.characters}>
        {
          getBookmark().length === 0
          ?<div className={styles.noBookmark}><p>There's no bookmarked character<br/> who is your favorate?</p></div>
          :<></>
        }{
        getBookmark().map(character=>
        <CharacterCardContainer id={character.id} character={character}/ >)
        } 
      </section>)
      :(<section className={styles.characters}>
        {storeData.map((character, idx) => 
        storeData.length === idx+1
        ?<div ref={lastCharacterRef}>
          <CharacterCardContainer id={character.id} character={character}/ > </div> : <CharacterCardContainer id={idx + 1} character={character}/>
          )} 
      </section>)
      }
      {
        loading
        ?<div>...loading</div> 
        : <></>
      }
    </div>
    </>
    )}

export default CharacterList;


