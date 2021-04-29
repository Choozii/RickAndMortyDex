import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setBookmarkToggle } from '../redux/actions/itemActions';
import CharacterCard from '../components/CharacterCard';

const CharacterCardContainer = ({character, id}) => {    
    const dispatch = useDispatch();
    const checked = useSelector(state => state.itemList.data[id-1].checked);
    const localStorageString = "RickAndMortyDex";
    const history = useHistory();

    const moveToDetail = () => {
        history.push(`/character/${character.name}`);
    }
    const onClickHandle = () => {
        dispatch(setBookmarkToggle(id));
        localStorage.getItem(`${localStorageString}${id}`)
        ? localStorage.removeItem(`${localStorageString}${id}`)
        : localStorage.setItem(`${localStorageString}${id}`, JSON.stringify(character));    
    }

    return <CharacterCard character={character} checked={checked} onClickHandle={onClickHandle} moveToDetail={moveToDetail}/>;
};

export default CharacterCardContainer;