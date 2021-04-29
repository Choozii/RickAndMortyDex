import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setBookmarkToggle } from '../redux/actions/itemActions';
import CharacterCard from '../components/CharacterCard';

const CharacterCardContainer = ({character, id}) => {    
    const dispatch = useDispatch();
    const localStorageString = "RickAndMortyDex";
    const [checked, setChecked] = useState(false);
    const history = useHistory();

    useEffect(()=>{
        localStorage.getItem(`${localStorageString}${id}`)
        ?setChecked(true)
        :setChecked(false)
    },[]);

    const moveToDetail = () => {
        history.push({
            pathname:`/character/${character.name}`,
            state:{character:character}
        });
    }
    const onClickHandle = () => {
        dispatch(setBookmarkToggle(id));
        localStorage.getItem(`${localStorageString}${id}`)
        ? localStorage.removeItem(`${localStorageString}${id}`)
        : localStorage.setItem(`${localStorageString}${id}`, JSON.stringify(character));    
        
        setChecked(!checked);
    }

    return <CharacterCard character={character} checked={checked} onClickHandle={onClickHandle} moveToDetail={moveToDetail}/>;
};

export default CharacterCardContainer;