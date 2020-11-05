import {combineReducers} from 'redux';
import appdata from './appdata';
import authdata from './authdata';

export default combineReducers ({
    Appdata: appdata,
    Authdata: authdata
})
