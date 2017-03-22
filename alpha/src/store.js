import { createStore, combineReducers } from 'redux';
import checkout from './redux/checkout';
import showCart from './redux/showCart';
import { hashHistory } from 'react-router';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';


const defaultState = {
  checkout
};

const rootReducer = combineReducers({checkout, showCart, routing: routerReducer});
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(hashHistory, store);

export default store;
