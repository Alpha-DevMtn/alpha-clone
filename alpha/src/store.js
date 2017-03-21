import { createStore, combineReducers } from 'redux';
import checkout from './redux/checkout';
import { hashHistory } from 'react-router';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
console.log('checkout: ', checkout);

const defaultState = {
  checkout
};

const rootReducer = combineReducers({checkout, routing: routerReducer});
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(hashHistory, store);

export default store;
