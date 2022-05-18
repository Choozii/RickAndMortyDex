import axios from 'axios';

export const getItemList = indices => async dispatch => {
  try {
    dispatch({
      type: 'LOADING',
    });
    const res = await axios.get(`https://rickandmortyapi.com/api/character/${indices}`);
    dispatch({
      type: 'ITEM_LIST_SUCCESS',
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: 'LOADING_FAIL',
    });
  }
};

export const getSearchResult = searchWord => async dispatch => {
  try {
    dispatch({
      type: 'LOADING',
    });
    let cancel;
    const res = await axios({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character',
      params: {
        name: searchWord,
      },
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    });
    dispatch({
      type: 'SEARCH_SUCCESS',
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: 'LOADING_FAIL',
    });
  }
};

export const setBookmarkToggle = id => async dispatch => {
  dispatch({
    type: 'BOOKMARK_TOGGLE',
    payload: id,
  });
};

export const setFilterToggle = () => async dispatch => {
  dispatch({
    type: 'FILTER_TOGGLE',
  });
};

export const setBookmarkTrue = id => async dispatch => {
  dispatch({
    type: 'BOOKMARK_TRUE',
    payload: id,
  });
};

export const updateFetchIndex = index => async dispatch => {
  dispatch({
    type: 'UPDATE_CHARACTER_INDEX',
    payload: index,
  });
};
