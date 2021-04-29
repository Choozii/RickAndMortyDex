import React from 'react';
import icon_bookmark_default from '../assets/images/icon_bookmark_default.svg';
import icon_bookmark_selected from '../assets/images/icon_bookmark_selected.svg';
import styles from './CharacterCard.module.css';
import { Link } from 'react-router-dom';

const CharacterCard = ({character, checked, onClickHandle}) => {    
    return (
        <section className={styles.character}>
            <div className={styles.wrapper}>
                <div className={styles.id}>{id}</div>
                <img className={styles.characterImg} src={character.image} alt="사진"></img>
                <button className={styles.bookmarkButton} onClick={onClickHandle}>
                    {checked
                    ?<img className={styles.bookmarkImg}src={icon_bookmark_selected}></img>
                    :<img className={styles.bookmarkImg}src={icon_bookmark_default}></img>}
                </button>   
            </div>
            <div className={styles.characterInfo}>
                <div>{character.status==="Alive"?<img title="alive" className={styles.alive}></img>:<img title="dead" className={styles.dead}></img>}</div>
                <div className={styles.name}>{character.name}</div>
                <div>{character.species}</div>
                <div>{character.gender}</div>
                <Link className={styles.link} to={`/character/${character.name}`}>DETAIL</Link>
            </div>
        </section>
    );
};

export default CharacterCard;