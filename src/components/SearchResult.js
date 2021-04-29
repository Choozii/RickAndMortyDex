import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import icon_bookmark_default from '../assets/images/icon_bookmark_default.svg';
import icon_bookmark_selected from '../assets/images/icon_bookmark_selected.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setBookmarkToggle } from '../redux/actions/itemActions';
import styles from './SearchResult.module.css';

const SearchResult = ({character, id}) => {    
    const dispatch = useDispatch();
    const localStorageString = "RickAndMortyDex";
    const [checked, setChecked] = useState(false);
    const history = useHistory();

    const onClickHandle = () => {
        dispatch(setBookmarkToggle(id));
        localStorage.getItem(`${localStorageString}${id}`)
        ? localStorage.removeItem(`${localStorageString}${id}`)
        : localStorage.setItem(`${localStorageString}${id}`, JSON.stringify(character));    
        
        localStorage.getItem(`${localStorageString}${id}`)
        ?setChecked(true)
        :setChecked(false)
    }

    return(
    <div className={styles.character}>
        <div className={styles.wrapper}>
            <div className={styles.id}>{character.id}</div>
            <img className={styles.characterImg} src={character.image} alt="사진"></img>
            <button className={styles.bookmarkButton} onClick={onClickHandle}>
                {checked
                ?<img className={styles.bookmarkImg}src={icon_bookmark_selected}></img>
                :<img className={styles.bookmarkImg}src={icon_bookmark_default}></img>}
            </button>   
        </div>
        <div className={styles.characterInfo}>
            <div>{character.status==="Alive"?<img title="alive" className={styles.alive}></img>:<img title="dead" className={styles.dead}></img>}</div>
            <div className={styles.name}><strong>{character.name}</strong></div>
            <div><strong>species</strong>{character.species}</div>
            <div><strong>Gender</strong>{character.gender}</div>
            <div><strong>Location</strong> {character.location.name}</div>
            <div><strong>Origin</strong>{character.origin.name}</div>
            <div><strong>Type</strong> {character.type===""?"not special":character.type}</div>
        </div>
    </div>
    )
};

export default SearchResult;