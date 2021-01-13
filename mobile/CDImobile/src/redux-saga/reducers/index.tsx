import { combineReducers } from 'redux';
import loginReducer from './authReducer';

const rootReducer = combineReducers({
    loginReducer,
  });

export default rootReducer;