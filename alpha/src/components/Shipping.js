import React, { Component } from 'react';
import '../styles/Shipping.css';
import world from '../images/world.png';
import murica from '../images/murica.png';
import worryFree from '../images/worry-free.png';

class Shipping extends Component {
  render() {
    return (
      <div className="threeFeatures">
        {/*}<div className="feature3">
          <img src={world} alt="world"/>
          <h3>WORLDWIDE<br/>EXPRESS SHIPPING</h3>
          <span>
            &bull; Trackable Worldwide shipping at the lowest possible prices<br/>
            &bull; 3-4 Day Express shipping now available!
          </span>
        </div>
        <div className="feature3">
          <img src={murica} alt="express shipping icon" />
          <h3>EXPRESS US<br/>SHIPPING</h3>
          <span>
           &bull; Fast, Secure, and Reliable US Shipping at the lowest possible prices<br/>
          </span>
        </div>
      <div className="feature3">
          <img src={worryFree} alt="product exchanges icon" />
          <h3>WORRY-FREE<br/>EXCHANGES</h3>
          <span>
          &bull; We provide complete customer satisfaction <br/>
          &bull; Worry-Free exchanges available for any orders
        </span>
      </div> */}
     </div>
    );
  }
}

export default Shipping;
