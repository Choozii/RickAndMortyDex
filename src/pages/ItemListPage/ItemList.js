import React from 'react';
import CardItemListContainer from '../../container/CardItemListContainer';
import FilteringToggleContainer from '../../container/FilteringToggleContainer';
import styled from 'styled-components';
import CharacterList from '../../container/CharacterList';


const Wrapper = styled.div`
    display : flex;
    justify-content : center;
    width : 100%;
  `;

const ItemList = () => {
    
    return (
        <>
          <FilteringToggleContainer/>
          <CharacterList/>
         </>
       
            );
}

export default ItemList;