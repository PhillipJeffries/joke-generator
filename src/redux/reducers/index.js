import {combineReducers} from 'redux';
import fetchReducer from './fetchReducer';
import clientReducer from './clientReducer';

export default combineReducers({
    fetchReducer,
    clientReducer
})