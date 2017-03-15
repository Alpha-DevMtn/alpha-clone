import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import App from './components/App';
import './styles/index.css';
import Nav from './components/Nav';
import MenProducts from './components/MenProducts';
import WomenProducts from './components/WomenProducts';
import CartSlide from './components/CartSlide';

ReactDOM.render(

  <Router history={hashHistory}>
    <Route component={Nav}>
      <Route path="/" component={App} />
      <Route path="/mens" component={MenProducts} />
      <Route path="/womens" component={WomenProducts} />
      <Route path="/cart" component={CartSlide} />
    </Route>
  </Router>

  , document.getElementById('root')
);
