import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Home from './components/Home';
import './styles/index.css';
import App from './components/App';
import MenProducts from './components/MenProducts';
import WomenProducts from './components/WomenProducts';
import CartSlide from './components/CartSlide';
import ProductPage from './components/ProductPage';

ReactDOM.render(

  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/mens" component={MenProducts} />
      <Route path="/womens" component={WomenProducts} />
      <Route path="/cart" component={CartSlide} />
      <Route path="/products/:product_id" component={ProductPage} />
    </Route>
  </Router>

  , document.getElementById('root')
);
