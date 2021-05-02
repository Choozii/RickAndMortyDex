import React from 'react';
import styles from './CharacterDetail.module.css';

const CharacterDetail = ({characterInfo}) => {
    return (
             <div className={styles.wrapper}>
                <div className={styles.imageBack}><img src={characterInfo.image} className={styles.image}></img></div>
                <div className={styles.name}>{characterInfo.name}{characterInfo.status==="Alive"?<div title="alive" className={styles.alive}></div>:<div title="dead" className={styles.dead}></div>}</div>
                <div></div>
                <div>{characterInfo.species}</div>

                <div>First seen in {characterInfo.origin.name}</div>
                <div>Last known location is {characterInfo.location.name}👽</div>
            </div>
    );
};

export default CharacterDetail;