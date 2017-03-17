import React, { Component } from 'react';
import '../styles/Popular.css';
import { Link } from 'react-router';
import shirt1 from '../images/3d-stealth.jpg';
import shirt2 from '../images/3d-forge.jpg';
import joggers1 from '../images/joggers-drk.jpg';
import joggers2 from '../images/joggers-blk.jpg';

class Popular extends Component {
  render() {
    return (
      <div className="wrap">
        <div className="forH2">
          <h2 className="popItems">
            POPULAR ITEMS
          </h2>
        </div>
        <div className="items">
          <div className="item item1">
            <Link>
              <img src={shirt1} alt="Stealth Tshirt"/>
              <p className="caption">3D KNITTED™ Performance Shirt - Stealth</p>
              <span className="pryce">$47.00 USD</span>
            </Link>
          </div>
          <div className="item item2">
            <Link>
              <img src={shirt2} alt="Forge Tshirt"/>
              <p className="caption">3D KNITTED™ Performance Shirt - Forge</p>
              <span>$47.00 USD</span>
            </Link>
          </div>
          <div className="item item3">
            <Link>
              <img src={joggers1} alt="Dark Joggers"/>
              <p className="caption">Tech Zip Joggers - DRK</p>
              <span>$57.90 USD</span>
            </Link>
          </div>
          <div className="item item4">
            <Link>
              <img src={joggers2} alt="Black Joggers"/>
              <p className="caption">Jogger Sweat Pants - Break - Black</p>
              <span>$49.90 USD</span>
            </Link>
          </div>*/}
        </div>
      </div>
    );
  }
}

export default Popular;
