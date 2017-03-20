import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Nav.css';
import alphaWhite from './../images/alphablack.png';


class Nav extends Component {
  render(){
    return (
      <div className="nav-main">
          <Link to="/" className='nav-lefty'>
            <img src={alphaWhite} className='nav-alpha-wt' alt=''/>
          </Link>
          <div className="nav-center">
          <div className='dropdown-sto-nav'>
            <p className="p-drop">STORE<span className="fa fa-angle-down"></span></p>
            <div className='store-nav'>
              <Link to="/mens"><p className="store-men">MEN</p></Link>
                <Link to="/womens"><p>WOMEN</p></Link>
                <p>HEADWEAR</p>
                <p>3D KNITTED™</p>
            </div>
          </div>
          <div className='dropdown-brand-nav'>
            <p className="p-drop">BRAND<span className="fa fa-angle-down"></span></p>
            <div className='brand-nav'>
              <p>ABOUT US</p>
              <p>GIVE BACK</p>
            </div>
          </div>
          <div className='dropdown-looks-nav'>
            <p className="p-drop">LOOKS</p>
          </div>
          <div className='dropdown-sup-nav'>
            <p className="p-drop">SUPPORT<span className="fa fa-angle-down"></span></p>
            <div className='sup-nav'>
              <p>FAQ</p>
              <p>SIZING GUIDE</p>
            </div>
          </div>
        </div>
        <div className="nav-right">
          <div className="currency-wrap">
            <select className="currency">
              <option value="">USD</option>
              <option value="">CAD</option>
              <option value="">AUD</option>
              <option value="">GBP</option>
              <option value="">EUR</option>
              <option value="">JPY</option>
            </select>
          </div>
          <Link to="/cart">
          <div className="cart-button">
            <span className="fa fa-cart-plus"></span>
            <span className="empty-nav"></span>
            <span className="fa fa-square-0 cart-count">0</span>
          </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Nav
