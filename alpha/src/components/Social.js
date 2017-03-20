import React, { Component } from 'react';
import '../styles/Social.css';


class Social extends Component {
  render() {
    return (
      <div className="socialWrap">
        <h3>FOLLOW @ALPHACLOTHING</h3>
        <div className="social-images">
          <a target="_blank" href="https://www.instagram.com/p/BRZYiakD3Ry/"><div className="social-image instagram1"></div></a>
          <a target="_blank" href="https://www.instagram.com/p/BRWkcUPjrpM/"><div className="social-image instagram2"></div></a>
          <a target="_blank" href="https://www.instagram.com/p/BRLdysfD6Z7/"><div className="social-image instagram3"></div></a>
          <a target="_blank" href="https://www.instagram.com/p/BRHDBVHA2Yl/"><div className="social-image instagram4"></div></a>
          <a target="_blank" href="https://www.instagram.com/p/BRCGnhej-Qm/"><div className="social-image instagram5"></div></a>
          <a target="_blank" href="https://www.instagram.com/p/BQ6kTdIDugA/"><div className="social-image instagram6"></div></a>
        </div>
        <div className="social-images mobile-hide">
          <a target="_blank" href="https://www.instagram.com/p/BQ1DDlLjLv7/"><div className="social-image instagram7"></div></a>
          <a target="_blank" href="https://www.instagram.com/p/BQljpwujBLo/"><div className="social-image instagram8"></div></a>
          <a target="_blank" href="https://www.instagram.com/p/BQjN8znln2H/"><div className="social-image instagram9"></div></a>
          <a target="_blank" href="https://www.instagram.com/p/BQY9rL7lNB_/"><div className="social-image instagram10"></div></a>
          <a target="_blank" href="https://www.instagram.com/p/BQVxTeSly_m/"><div className="social-image instagram11"></div></a>
          <a target="_blank" href="https://www.instagram.com/p/BQTW8e8lSHc/"><div className="social-image instagram12"></div></a>
        </div>

      </div>

    );
  }
}

export default Social;
