import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import cn from 'classnames';
import {useHistory} from 'react-router-dom';
import styles from './Character.module.css';
import Accordion from '../../components/Accordion'

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
    <div> 
        {
            characterInfo
            ? <div className={styles.wrapper}>
                <img src={characterInfo.image} className={styles.image}></img>
                <div className={styles.name}>{characterInfo.name}{characterInfo.status==="Alive"?<img title="alive" className={styles.alive}></img>:<img title="dead" className={styles.dead}></img>}</div>
                <div></div>
                <div>{characterInfo.species}</div>

                <div>First seen in {characterInfo.origin.name}</div>
                <div>Last known location is {characterInfo.location.name}👽</div>
                <Accordion title="episode" contents={characterInfo.episode}/>
            </div>
            :
            <></>
            }
    </div>
</>);
};

export default Character;