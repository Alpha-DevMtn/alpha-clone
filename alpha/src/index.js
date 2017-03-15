import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

import Home from './components/Home';
import './styles/index.css';
import App from './components/App';
import store, { history } from './store';
import MenProducts from './components/MenProducts';
import WomenProducts from './components/WomenProducts';
import CartSlide from './components/CartSlide';

ReactDOM.render(
<Provider store={store}>
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/mens" component={MenProducts} />
      <Route path="/womens" component={WomenProducts} />
      <Route path="/cart" component={CartSlide} />
    </Route>
  </Router>
</Provider>

  , document.getElementById('root')
);
