import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Mwa.css';


class Mwa extends Component {
  render() {
    return (
      <div className="mwaWrapper">
        <Link to="/mens">
          <div className="men">
            <h1 className="mwa-h1">MEN</h1>
            <div className="changing">
              <h2 className="mwa-h2">MENS</h2>
              <div className="useless"></div>
              <p className="mwa-p">Shop Now</p>
            </div>
          </div>
        </Link>
        <Link to="/womens">
          <div className="women">
            <h1 className="mwa-h1">WOMEN</h1>
              <div className="changing">
                <h2 className="mwa-h2">WOMEN</h2>
                <div className="useless"></div>
                <p className="mwa-p">Shop Now</p>
              </div>
          </div>
        </Link>
        <Link>
          <div className="accessories">
            <h1 className="mwa-h1">ACCESSORIES</h1>
              <div className="changing">
                <h2 className="mwa-h2">ACCESSORIES</h2>
                <div className="useless"></div>
                <p className="mwa-p">Shop Now</p>
              </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Mwa;
