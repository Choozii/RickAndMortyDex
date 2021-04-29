import React from 'react';
import Accordion from './Accordion';
import styles from './CharacterDetail.module.css';

const CharacterDetail = ({characterInfo}) => {
    return (
        <div> 
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
        </div>
    );
};

export default CharacterDetail;