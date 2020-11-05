import reducer from './reducer/combinereducer'

import {createStore} from 'redux'

const store = createStore(reducer);

export default store;