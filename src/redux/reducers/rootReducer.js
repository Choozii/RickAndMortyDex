import {combineReducers} from 'redux';
import itemListReducer from './itemListReducer';

const rootReducer = combineReducers({
    itemList : itemListReducer
});

export default rootReducer;
