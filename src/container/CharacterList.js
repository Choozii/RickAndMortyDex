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
  const filter = useSelector(state => state.itemList.filter);
  const [renderData, setRenderData] = useState(storeData);
  const observer = useRef();

  useEffect(() => {
    dispatch(getItemList(index));
  }, [index])

  useEffect(()=>{
    if(filter === true){
      let bookmarkedCharacters = [];
      for (let key in localStorage){
        if(key.substring(0,15) === 'RickAndMortyDex')
        bookmarkedCharacters.push(localStorage[key])
      }
      let parsedData=[]
      for (let character of bookmarkedCharacters){
        parsedData.push(JSON.parse(character));
      }
      console.log(parsedData);
      setRenderData(parsedData);//로컬 스토리지 내부 데이터
    
     }else{
      setRenderData(storeData);
     }
  },[filter]);
  
  const lastCharacterRef = useCallback(node => {
    if(loading) return ;
    if(filter) return ;
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
        (renderData.length) === 0
        ?<div>Sorry, there's no Data</div>
        :<></>
      }
      {
          renderData.map((character, idx) => {
            return (
              renderData.length === idx+1
              ?
              <section ref={lastCharacterRef} className="character_list">
                  <CharacterCard id={idx+1} character={character}/>
              </section>
              :
              <section className="character_list">
                  <CharacterCard id={idx+1} character={character}/>
              </section>
            )
        })
      }
    {
        loading
        ?<div>...loading</div>
        :<></>
      }
    </div>
  );
};


export default CharacterList;