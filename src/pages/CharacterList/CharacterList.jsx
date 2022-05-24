import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemList, updateFetchIndex } from '@redux/actions/itemActions';
import CharacterCardContainer from './CharacterCardContainer';
import { Container } from '@components/common';
import styled from '@emotion/styled';
import Spinner from '@components/spinner';

const CharacterList = () => {
  const dispatch = useDispatch();
  const storeData = useSelector(state => state.itemList.data);
  const loading = useSelector(state => state.itemList.loading);
  const error = useSelector(state => state.itemList.error);
  const filter = useSelector(state => state.itemList.filter);
  const characterIndices = useSelector(state => state.itemList.characterIndices);
  const observer = useRef();
  const greetingRef = useRef(null);

  useEffect(() => {
    dispatch(getItemList(characterIndices));
  }, [characterIndices]);

  // const getBookmark = () => {
  //   let bookmarkedCharacters = [];
  //   for (let key in localStorage) {
  //     if (key.substring(0, 15) === 'RickAndMortyDex') bookmarkedCharacters.push(localStorage[key]);
  //   }
  //   let parsedData = [];
  //   for (let character of bookmarkedCharacters) {
  //     parsedData.push(JSON.parse(character));
  //   }
  //   return parsedData;
  // };

  const lastCharacterRef = useCallback(
    node => {
      if (loading) return;
      if (filter) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          console.log('hi');
          let newIndices = characterIndices.map(el => el + 12);
          dispatch(updateFetchIndex(newIndices));
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
        {/* {getBookmark().length === 0 ? (
          <div ref={greetingRef}>
            <img src={Greetings}></img>
            <p>NO BOOKMARK</p>
          </div>
        ) : (
          <></>
        )}
        {getBookmark().map(character => (
          <CharacterCardContainer id={character.id} character={character} />
        ))} */}
        <div>수정중</div>
      </section>
    );
  };
  return (
    <>
      <StyledContainer>
        {filter ? <RenderFilteredCharacterCards /> : <RenderCharaterCards />}
        {loading ? <Spinner /> : <></>}
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
