import React, { Component } from 'react';
import '../styles/Shipping.css';
import '../styles/Animations.styl';
import world from '../images/world.png';
import murica from '../images/murica.png';
import worryFree from '../images/worry-free.png';


class Shipping extends Component {
  render() {
    return (
      <div className="threeFeatures">
        <div className="feature3">
          <div className="ship-trigger"></div>
          <div className="f3smaller">
            <img className="f3img" src={world} alt="world"/>
            <h3 className="shipH3">WORLDWIDE<br/>EXPRESS SHIPPING</h3>
          </div>
          <h4 className="bull">
            &bull; Trackable Worldwide shipping at the lowest possible prices<br/>
            &bull; 3-4 Day Express shipping now available!
          </h4>
        </div>
        <div className="feature3">
          <div className="ship-trigger"></div>
          <div className="f3smaller">
          <img className="f3img" src={murica} alt="express shipping icon" />
            <h3>EXPRESS US<br/>SHIPPING</h3>
          </div>
          <h4 className="bull">
           &bull; Fast, Secure, and Reliable US Shipping at the lowest possible prices<br/>
          </h4>
        </div>
        <div className="feature3">
          <div className="ship-trigger"></div>
          <div className="f3smaller">
            <img className="f3img" src={worryFree} alt="product exchanges icon" />
            <h3>WORRY-FREE<br/>EXCHANGES</h3>
          </div>
          <h4 className="bull">
            &bull; We provide complete customer satisfaction <br/>
            &bull; Worry-Free exchanges available for any orders
          </h4>
        </div>
     </div>
    );
  }
}

export default Shipping;
