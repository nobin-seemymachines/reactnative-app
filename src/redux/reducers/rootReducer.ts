import {combineReducers} from 'redux';
import userReducer from './user/userReducer';

export const rootReducer: any = combineReducers({
  user: userReducer,
});
