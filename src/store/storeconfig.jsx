import reducer from './reducer/combinereducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //for functional work install this liabrary

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default store;