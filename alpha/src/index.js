import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route} from 'react-router';

import Home from './components/Home';
import './styles/index.css';
import App from './components/App';
import store, { history } from './store';
import MenProducts from './components/MenProducts';
import WomenProducts from './components/WomenProducts';
import CartSlide from './components/CartSlide';
import Customer from './components/Customer';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import ProductPage from './components/ProductPage';

ReactDOM.render(
<Provider store={store}>
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/mens" component={MenProducts} />
      <Route path="/womens" component={WomenProducts} />
      <Route path="/cart" component={CartSlide} />
      <Route path="/customer" component={Customer} />
      <Route path="/shipping" component={Shipping} />
      <Route path="/payment" component={Payment} />
      <Route path="/mens/:product_id" component={ProductPage} />
    </Route>
  </Router>
</Provider>

  , document.getElementById('root')
);
