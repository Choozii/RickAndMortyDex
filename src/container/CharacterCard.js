import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icon_bookmark_default from '../assets/images/icon_bookmark_default.svg';
import icon_bookmark_selected from '../assets/images/icon_bookmark_selected.svg';
import styles from './CharacterCard.module.css';
import { setBookmarkToggle } from '../redux/actions/itemActions'

const CharacterCard = ({character, id}) => {    
    //const [checked, setChecked] = useState(false);
    const filter = useSelector(state => state.itemList.filter);
    const dispatch = useDispatch();
    const checked = useSelector(state => state.itemList.data[id-1].checked);
    const localStorageString = "RickAndMortyDex";

    const onClickHandle = () => {
        dispatch(setBookmarkToggle(id));
        localStorage.getItem(`${localStorageString}${id}`)
        ? localStorage.removeItem(`${localStorageString}${id}`)
        : localStorage.setItem(`${localStorageString}${id}`, JSON.stringify(character));    
    }

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
                <div className={styles.name}>{character.name}</div>
                <div>{character.species}</div>
                <div>{character.gender}</div>
            </div>
        </section>
    );
};

export default CharacterCard;