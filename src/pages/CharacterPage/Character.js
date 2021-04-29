import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useHistory, useLocation} from 'react-router-dom';
import styles from './Character.module.css';
import CharacterDetail from '../../components/CharacterDetail';

const Character = (props) => {

  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const character = location.state.character;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const movePage = () => {
    history.goBack();
  }

  return ( 
  <> 
    <button className={styles.back} onClick={movePage}>BACK</button> 
    <CharacterDetail characterInfo={character}/>
  </>
)};

export default Character;