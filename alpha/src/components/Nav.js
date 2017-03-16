import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Nav.css';

class Nav extends Component {
  render(){
    return (
      <div>
      <div className="nav-main">
        <div className="nav-sub">
        <div className="nav-left"><Link to="/">Home</Link></div>
        <div className="nav-center">
            <ul>
              <li className="nav-category">
                <p className="nav-main-link">STORE</p>
                <div className="nav-drop">
                  <Link to="/mens"><p>MEN</p></Link>
                  <Link to="/womens"><p>WOMEN</p></Link>
                  <p>HEADWEAR 2</p>
                  <p>KNITTED 3D 3</p>
                </div>
              </li>
              <li className="nav-category">
                <p className="nav-main-link">BRAND</p>
                <div className="nav-drop">
                  <p>Link 1</p>
                  <p>Link 2</p>
                </div>
              </li>
              <li className="nav-category">
                <p className="nav-main-link">LOOKS</p>
              </li>
              <li className="nav-category">
                <p className="nav-main-link">SUPPORT</p>
                <div className="nav-drop">
                  <p>Link 1</p>
                  <p>Link 2</p>
                </div>
              </li>
            </ul>
        </div>
        <div className="nav-right"><Link to="/cart"><p>CART</p></Link></div>
      </div>
      </div>

      </div>
    )
  }
}

export default Nav
