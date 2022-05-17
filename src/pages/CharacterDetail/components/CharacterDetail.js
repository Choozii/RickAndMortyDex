import React from 'react';
import styled from '@emotion/styled';

const CharacterDetail = ({ characterInfo }) => {
  return (
    <div>
      <div>
        <img src={characterInfo.image}></img>
      </div>
      <div>
        {characterInfo.name}
        {characterInfo.status === 'Alive' ? <div title="alive"></div> : <div title="dead"></div>}
      </div>
      <div></div>
      <div>{characterInfo.species}</div>

      <div>First seen in {characterInfo.origin.name}</div>
      <div>Last known location is {characterInfo.location.name}👽</div>
    </div>
  );
};

export default CharacterDetail;
