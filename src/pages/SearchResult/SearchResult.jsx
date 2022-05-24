import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import CharacterCardContainter from '../CharacterList/CharacterCardContainer';
import { Container } from '@components/common';
const Searching = () => {
  const searchData = useSelector(state => state.itemList.searchData);

  return (
    <Container>
      <PageWrapper>
        {searchData.map(result => (
          <CardWrapper>
            <CharacterCardContainter character={result} />
          </CardWrapper>
        ))}
      </PageWrapper>
    </Container>
  );
};

export default Searching;

const PageWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
`;
const CardWrapper = styled.div`
  margin: 10px;
`;
