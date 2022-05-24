import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Container } from '@components/common';

const CharacterDetailPage = () => {
  const locationObj = useLocation();
  const { image, name, status, species, origin, location, episode } = locationObj.state.character;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <Image src={image} />
        <ul>
          <li>
            이름 : {name} ({status === 'Alive' ? '생존' : '사망'})
          </li>
          <li>종족 : {species}</li>
          <li>최초 발견지 : {origin.name}</li>
          <li>마지막 출몰지 : {location.name}👽</li>
          {/* //TODO: 
        1. collapse list
        2. how can I make it more clear
         */}
          <li>출현 에피소드</li>
          {episode.map(el => {
            let urls = el.split('/');
            return <div>{urls[urls.length - 1]}화</div>;
          })}
        </ul>
      </ContentWrapper>
    </Container>
  );
};

export default CharacterDetailPage;

const Image = styled.img`
  border-radius: 10px;
`;
const ContentWrapper = styled.div`
  margin: 68px auto;
`;
