import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSearchResult } from '../../redux/actions/itemActions';
import CharacterCardContainter from '../CharacterList/CharacterCardContainer';

const Searching = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchData = useSelector(state => state.itemList.searchData);
  const noResultRef = useRef(null);

  useEffect(() => {
    dispatch(getSearchResult(location.state.words));
  }, []);

  return (
    <>
      <div>
        <section>
          {searchData.length === 0 ? (
            <>
              <p>NO RESULT</p>
            </>
          ) : (
            <></>
          )}
          {searchData.map(result => (
            <CharacterCardContainter character={result} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Searching;
