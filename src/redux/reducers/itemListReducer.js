const initialState = {
  loading: false,
  data: [],
  searchData: [],
  characterIndices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  error: false,
  filter: false,
};

const itemListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'ITEM_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: state.data.concat(action.payload.map(item => ({ ...item, checked: false }))),
        error: false,
      };
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        filter: false,
        searchData: action.payload.results,
      };
    case 'LOADING_FAIL':
      return {
        ...state,
        loading: false,
        searchData: [],
        error: true,
      };
    case 'BOOKMARK_TOGGLE':
      return {
        ...state,
        data: state.data.map(item => (item.id === action.payload ? { ...item, checked: !item.checked } : item)),
      };
    case 'FILTER_TOGGLE':
      return {
        ...state,
        filter: !state.filter,
      };
    case 'BOOKMARK_TRUE':
      return {
        ...state,
        data: state.data.map(item => (String(item.id) === String(action.payload) ? { ...item, checked: true } : item)),
      };
    case 'UPDATE_CHARACTER_INDEX':
      return {
        ...state,
        characterIndices: action.payload,
      };
    default:
      return state;
  }
};

export default itemListReducer;
