import React, { useEffect, useRef, useState, useReducer, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemList } from '../../redux/actions/itemActions';
import CharacterCardContainer from './CharacterCardContainer';
import Greetings from '../../assets/images/greetings.png';
import { gsap } from 'gsap';
import Header from './components/Header';
import { Container } from '@components/common';
import styled from '@emotion/styled';

const CharacterList = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(); //렌더링을 위한 캐릭터 번호 저장
  const storeData = useSelector(state => state.itemList.data);
  const loading = useSelector(state => state.itemList.loading);
  const error = useSelector(state => state.itemList.error);
  const filter = useSelector(state => state.itemList.filter);
  const observer = useRef();
  let fetchIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const greetingRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(greetingRef.current, {
  //     opacity: 0,
  //     duration: 1,
  //     delay: 0.4,
  //     x: -30,
  //   });
  // }, [filter]);

  useEffect(() => {
    //화면에 처음 접속한 경우
    if (storeData.length === 0) setIndex(fetchIndex);
    //다른 화면에서 돌아온 경우는 스토어 내부의 데이터 길이를 참조해서 인덱스를 구함
    else if (storeData.length !== 0) {
      fetchIndex = fetchIndex.map(idx => idx + storeData.length);
    }
  }, []);

  useEffect(() => {
    if (!index) return;
    dispatch(getItemList(index));
  }, [index]);

  const getBookmark = () => {
    let bookmarkedCharacters = [];
    for (let key in localStorage) {
      if (key.substring(0, 15) === 'RickAndMortyDex') bookmarkedCharacters.push(localStorage[key]);
    }
    let parsedData = [];
    for (let character of bookmarkedCharacters) {
      parsedData.push(JSON.parse(character));
    }
    return parsedData;
  };

  const lastCharacterRef = useCallback(
    node => {
      if (loading) return;
      if (filter) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          fetchIndex = fetchIndex.map(idx => idx + storeData.length);
          setIndex(fetchIndex);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const RenderCharaterCards = () => {
    return (
      <CardsContainer>
        {storeData.map((character, idx) =>
          storeData.length === idx + 1 ? (
            <CardWrapper ref={lastCharacterRef}>
              <CharacterCardContainer id={character.id} character={character} />
            </CardWrapper>
          ) : (
            <CardWrapper>
              <CharacterCardContainer id={idx + 1} character={character} />
            </CardWrapper>
          )
        )}
      </CardsContainer>
    );
  };

  const RenderFilteredCharacterCards = () => {
    return (
      <section>
        {getBookmark().length === 0 ? (
          <div ref={greetingRef}>
            <img src={Greetings}></img>
            <p>NO BOOKMARK</p>
          </div>
        ) : (
          <></>
        )}
        {getBookmark().map(character => (
          <CharacterCardContainer id={character.id} character={character} />
        ))}
      </section>
    );
  };
  return (
    <>
      <Header />
      <StyledContainer>
        {storeData.length === 0 && <div>Sorry, there's no Data</div>}
        {filter ? <RenderFilteredCharacterCards /> : <RenderCharaterCards />}
        {loading ? <div>...loading</div> : <></>}
      </StyledContainer>
    </>
  );
};

export default CharacterList;

const StyledContainer = styled(Container)`
  margin: 63px auto;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const CardWrapper = styled.div`
  margin: 10px;
`;
