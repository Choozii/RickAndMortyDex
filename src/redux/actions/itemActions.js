import axios from "axios";

export const getItemList = (charaterList) => async (dispatch) => {
  try {
    dispatch({
      type: "ITEM_LIST_LOADING",
    });
  
    const res = await axios.get(`https://rickandmortyapi.com/api/character/${charaterList}`);
    console.log(res);
    dispatch({
      type: "ITEM_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "ITEM_LIST_FAIL",
    });
  }
};

export const setBookmarkToggle = (id) => async (dispatch) => {
  dispatch({
    type: "BOOKMARK_TOGGLE",
    payload: id,
  });
};

export const setFilterToggle = () => async (dispatch) => {
  dispatch({
    type: "FILTER_TOGGLE",
  });
};

export const setBookmarkTrue = (id) => async (dispatch) => {
  dispatch({
    type: "BOOKMARK_TRUE",
    payload: id,
  });
};
