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
              <img className="pop-img" className="pop-img" src={shirt1} alt="Stealth Tshirt"/>
              <p className="caption">3D KNITTED™ Performance Shirt - Stealth</p>
              <p className="pop-bold">$47.00 USD</p>
            </Link>
          </div>
          <div className="item item2">
            <Link>
              <img className="pop-img" src={shirt2} alt="Forge Tshirt"/>
              <p className="caption">3D KNITTED™ Performance Shirt - Forge</p>
              <p className="pop-bold">$47.00 USD</p>
            </Link>
          </div>
          <div className="item item3">
            <Link>
              <img className="pop-img" src={joggers1} alt="Dark Joggers"/>
              <p className="caption">Tech Zip Joggers - DRK</p>
              <p className="pop-bold">$57.90 USD</p>
            </Link>
          </div>
          <div className="item item4">
            <Link>
              <img className="pop-img" src={joggers2} alt="Black Joggers"/>
              <p className="caption">Jogger Sweat Pants - Break - Black</p>
              <p className="pop-bold">$49.90 USD</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Popular;
