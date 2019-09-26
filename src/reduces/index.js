import { combineReducers } from 'redux';

import List from './List'
const myReducer = combineReducers({
  List: List,
});

export default myReducer;