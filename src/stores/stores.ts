import { createStore, Store } from 'redux';

import rootReducer from './reduces'

import AppState from './storeType'

//import { useDispatch } from 'react-dom'

const store: Store<AppState> = createStore(rootReducer);

export default store;