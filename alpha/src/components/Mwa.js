import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Mwa.css';
import menlink from '../images/menlink.jpg';
import womenlink from '../images/womenlink.jpg';
import accesslink from '../images/accesslink.jpg';


class Mwa extends Component {
  render() {
    return (
      <div className="mwaWrapper">
        <Link to="/mens">
          <div className="men">
            <h1>MEN</h1>
            <div className="changing">
              <h2>MENS</h2>
              <hr className="otherLine"/>
              <p>Shop Now</p>
            </div>
          </div>
        </Link>
        <Link to="/womens">
          <div className="women">
            <h1>WOMEN</h1>
              <div className="changing">
                <h2>WOMEN</h2>
                <hr className="otherLine"/>
                <p>Shop Now</p>
              </div>
          </div>
        </Link>
        <Link>
          <div className="accessories">
            <h1>ACCESSORIES</h1>
              <div className="changing">
                <h2>WOMEN</h2>
                <hr className="otherLine"/>
                <p>Shop Now</p>
              </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Mwa;
