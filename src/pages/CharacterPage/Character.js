import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import styles from './Character.module.css';
import CharacterDetail from '../../components/CharacterDetail';

const Character = (props) => {

  const history = useHistory();
  const characterName = props.match.params.name;
  const characterInfo = useSelector(state => state.itemList.data.find(character => character.name === characterName));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const movePage = () => {
    history.goBack();
  }

  return ( 
  <> 
    <button className={styles.back} onClick={movePage}>BACK</button> 
    <CharacterDetail characterInfo={characterInfo}/>
  </>
)};

export default Character;