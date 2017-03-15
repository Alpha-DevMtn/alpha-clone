import { createStore, combineReducers } from 'redux';
import red1 from './redux/red1';
import { hashHistory } from 'react-router';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
console.log('red1: ', red1);

const defaultState = {
  red1
};

const rootReducer = combineReducers({red1, routing: routerReducer});
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(hashHistory, store);

export default store;
