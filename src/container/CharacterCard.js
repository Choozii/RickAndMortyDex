import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icon_bookmark_default from '../assets/images/icon_bookmark_default.svg';
import icon_bookmark_selected from '../assets/images/icon_bookmark_selected.svg';
import './CharacterCard.css';
import { setBookmarkToggle } from '../redux/actions/itemActions'

const CharacterCard = ({character, id}) => {    
    const [bookmarkIconSrc, setBookmarkIconSrc] = useState(icon_bookmark_default);
    const filter = useSelector(state => state.itemList.filter);
    const dispatch = useDispatch();
    const localStorageString = "RickAndMortyDex";

    useEffect(()=>{
        localStorage.getItem(`${localStorageString}${id}`)
        ? setBookmarkIconSrc(icon_bookmark_selected)
        : setBookmarkIconSrc(icon_bookmark_default);
    },[filter])
    
    const onClickHandle = () => {
        bookmarkIconSrc === icon_bookmark_default
        ? setBookmarkIconSrc(icon_bookmark_selected)
        : setBookmarkIconSrc(icon_bookmark_default);


        dispatch(setBookmarkToggle(id));
        localStorage.getItem(`${localStorageString}${id}`)
        ? localStorage.removeItem(`${localStorageString}${id}`)
        : localStorage.setItem(`${localStorageString}${id}`, JSON.stringify(character));
    }

    return (
        <section className="character">
            <div className="character_image_bookmark_wrapper">
                <div className="character_number">{id}</div>
                <img className="character_image"src={character.image} alt="사진"></img>
                <div onClick={onClickHandle}>
                    <img className="character_bookmark"src={bookmarkIconSrc}></img>
                </div>   
            </div>
            <div className="character_info">
                <div className="character_info_name">{character.name}</div>
                <div>{character.species}</div>
                <div>{character.gender}</div>
            </div>
        </section>
    );
};

export default CharacterCard;