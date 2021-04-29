import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBookmarkToggle } from '../redux/actions/itemActions';
import CharacterCard from '../components/CharacterCard';

const CharacterCardContainer = ({character, id}) => {    
    const dispatch = useDispatch();
    const checked = useSelector(state => state.itemList.data[id-1].checked);
    const localStorageString = "RickAndMortyDex";


    const onClickHandle = () => {
        dispatch(setBookmarkToggle(id));
        localStorage.getItem(`${localStorageString}${id}`)
        ? localStorage.removeItem(`${localStorageString}${id}`)
        : localStorage.setItem(`${localStorageString}${id}`, JSON.stringify(character));    
    }

    return <CharacterCard character={character} checked={true} onClickHandle={onClickHandle}/>;
};

export default CharacterCardContainer;