import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icon_bookmark_default from '../assets/images/icon_bookmark_default.svg';
import icon_bookmark_selected from '../assets/images/icon_bookmark_selected.svg';
import './CharacterCard.css';
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
        <section className="character">
            <div className="character_image_bookmark_wrapper">
                <div className="character_number">{id}</div>
                <img className="character_image"src={character.image} alt="사진"></img>
                <div onClick={onClickHandle}>
                    {checked
                    ?<img className="character_bookmark"src={icon_bookmark_selected}></img>
                    :<img className="character_bookmark"src={icon_bookmark_default}></img>}
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