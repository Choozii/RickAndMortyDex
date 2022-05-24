import React, { useState } from 'react';
import BottomSheet from '@components/bottom_sheet';
import SearchBar from '@components/search_bar';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchResult } from '@redux/actions/itemActions.js';

const Search = () => {
  const [word, setWord] = useState('');
  const [showSheet, setShowSheet] = useState(false);
  const dispatch = useDispatch();

  const fetchSearchFunction = words => {
    dispatch(getSearchResult(words));
    setShowSheet(false);
  };

  return (
    <BottomSheet title="🔍">
      {<SearchBar placeholder="" onCallback={words => fetchSearchFunction(words)} />}
    </BottomSheet>
  );
};

export default Search;
