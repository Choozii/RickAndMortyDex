import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getItemList } from '../redux/actions/itemActions';

const CharacterList = () => {
    const dispatch = useDispatch();
    const storeData = useSelector((state) => state.itemList.data);
    useEffect(() => {
        dispatch(getItemList('[1,2,3,4,5]'));
    }, [])
    
    const renderData = () =>{
    
     for(let i=0;i<storeData.length;i++) 
        return <div><img src={storeData[i].image}></img></div>
    }
    return (
        <div>
           {renderData()}
        </div>
    );
};

export default CharacterList;