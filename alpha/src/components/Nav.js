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
            <p>Store</p>
            <div className='store-nav'>
              <Link to="/mens"><p>MEN</p></Link>
                <Link to="/womens"><p>WOMEN</p></Link>
                <p>HEADWEAR 2</p>
                <p>KNITTED 3D 3</p>
            </div>
          </div>
          
          <div className='dropdown-brand-nav'>
            <p>Brand</p>
            <div className='brand-nav'>
              <p>ABOUT US</p>
              <p>GIVE BACK</p>
            </div>
          </div>
          <div className='dropdown-looks-nav'>
            <p>Looks</p>
          </div>
          <div className='dropdown-sup-nav'>
            <p>Support</p>
            <div className='sup-nav'>
              <p>FAQ</p>
              <p>SIZING GUIDE</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="nav-right">
        <p>CART</p>
        </Link>
      </div>
    )
  }
}

export default Nav
