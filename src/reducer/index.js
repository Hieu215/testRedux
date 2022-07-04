import useReducer from './user';
import hobbyReducer from './hobby';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  hobby: hobbyReducer,
  user: useReducer,
});

export default rootReducer;
