import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Nav.css';

class Nav extends Component {
  render(){
    return (
      <div>
      <div className="nav-main">
        <div className="nav-sub">
        <div className="left"><Link to="/">Home</Link></div>
        <div className="center">
            <ul>
              <li className="category">
                <p className="main-link">STORE</p>
                <div className="drop">
                  <Link to="/mens"><p>MEN</p></Link>
                  <Link to="/womens"><p>WOMEN</p></Link>
                  <p>HEADWEAR 2</p>
                  <p>KNITTED 3D 3</p>
                </div>
              </li>
              <li className="category">
                <p className="main-link">BRAND</p>
                <div className="drop">
                  <p>Link 1</p>
                  <p>Link 2</p>
                </div>
              </li>
              <li className="category">
                <p className="main-link">LOOKS</p>
              </li>
              <li className="category">
                <p className="main-link">SUPPORT</p>
                <div className="drop">
                  <p>Link 1</p>
                  <p>Link 2</p>
                </div>
              </li>
            </ul>
        </div>
        <div className="right"><Link to="/cart"><p>CART</p></Link></div>
      </div>
      </div>

      </div>
    )
  }
}

export default Nav
