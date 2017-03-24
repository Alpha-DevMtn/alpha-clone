import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Footer.css';
import fbook from './../images/fbook.png';
import igLogo from './../images/igLogo.png';


class Footer extends Component {
  render() {
    return (
      <div className="fWrapper">
        <div className="fContainer">
          <h4 className="follow">
            Follow
          </h4>
          <div className="footer-one">
            <a href="https://www.facebook.com/AlphaUp" className="aFoot"><img className="socialIcon" src={fbook} alt="Facebook Logo"/></a>
            <a href="https://instagram.com/alphaclothing/" className="aFoot1"><img src={igLogo} alt="Instagram Logo" className="socialIcon"/></a>
            <a href="https://cdn.shopify.com/s/files/1/0214/2126/t/9/assets/IMG_4617.jpg?10649084143014751401" className="aFoot2"><img src="//cdn.shopify.com/s/files/1/0214/2126/t/9/assets/snap-icon-01.png?6464457657042984547" alt="SnapChat Logo" className="socialIcon"/></a>
          </div>
          <div className="footer-two">
            <h4 className="fh4">Search</h4>
            <h4 className="fh4">Sizing Guide</h4>
            <h4 className="fh4">About Us</h4>
            <h4 className="fh4">Support</h4>
            <h4 className="fh444">Privacy Policy</h4>
            <br/>
            <p className="footp">Sign up to get the latest on sales, new releases, and more ...</p>
            <input type="email" name="contact" required pattern="[^ @]*@[^ @]*" placeholder="Enter your email address..." className="femail"/>
            <input type="submit" className="signup"/>
          </div>
        </div>
      </div>

    )
  }
}


export default Footer
