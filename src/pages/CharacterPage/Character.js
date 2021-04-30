import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import CharacterDetail from '../../components/CharacterDetail';
import Header from '../../components/Header';

const Character = () => {
  const location = useLocation();
  const character = location.state.character;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return ( 
  <> 
    <Header/>
    <CharacterDetail characterInfo={character}/>
  </>
)};

export default Character;