import React from 'react';
import CardItemListContainer from '../../container/CardItemListContainer';
import FilteringToggleContainer from '../../container/FilteringToggleContainer';
import styled from 'styled-components';


const Wrapper = styled.div`
    display : flex;
    justify-content : center;
    width : 100%;
  `;
  const ItemListPage = styled.div`
  @media screen and (min-width: 1440px) {
    width: 1256px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 1024px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    width: 768px;
  }
  @media screen and (max-width: 425px) {
    width: 335px;
  }
  `;

const ItemList = () => {
    
    return (
            <Wrapper>
                    <ItemListPage>
                        <FilteringToggleContainer/>
                        <CardItemListContainer/>
                    </ItemListPage>
            </Wrapper>
            );
}

export default ItemList;