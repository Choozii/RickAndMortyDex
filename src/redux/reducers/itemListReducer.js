const initialState = {
    loading: false,
    data: [],
    errorMsg: "",
    filter: false,
  };
  
  const itemListReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ITEM_LIST_LOADING":
        return {
          ...state,
          loading: true,
          errorMsg: "",
        };
      case "ITEM_LIST_SUCCESS":
        return {
          ...state,
          loading: false,
          data: state.data.concat(action.payload.map(item => ({...item, 'checked' : false}))),
          errorMsg: "",
        };
      case "ITEM_LIST_FAIL":
        return {
          ...state,
          loading: false,
          errorMsg: "error in 아이템 불러오기",
        };
      case "BOOKMARK_TOGGLE":
        return {
          ...state,
          data: state.data.map((item) =>
            item.id === action.payload
              ? { ...item, checked: !item.checked }
              : item
          ),
        };
      case "FILTER_TOGGLE":
        return {
          ...state,
          filter: !state.filter,
        };
      case "BOOKMARK_TRUE":
        return {
          ...state,
          data: state.data.map((item) =>
            String(item.id) === String(action.payload)
              ? { ...item, checked: true }
              : item
          ),
        };
      default:
        return state;
    }
  };
  
  export default itemListReducer;
  