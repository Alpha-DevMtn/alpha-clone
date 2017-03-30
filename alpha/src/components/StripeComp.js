import React from 'react';
import {connect} from 'react-redux';
import '../styles/StripeComp.css';
import './stripe0.js';


class StripeComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
      Stripe!!!!!!!!!
      
<form>
  <label>
    <span>Name</span>
    <input name="cardholder-name" class="field" placeholder="Jane Doe" />
  </label>
  <label>
    <span>Phone</span>
    <input class="field" placeholder="(123) 456-7890" type="tel" />
  </label>
  <label>
    <span>ZIP code</span>
    <input name="address-zip" class="field" placeholder="94110" />
  </label>
  <label>
    <span>Card</span>
    <div id="card-element" class="field"></div>
  </label>
  <button type="submit">Pay $25</button>
  <div class="outcome">
    <div class="error"></div>
    <div class="success">
      Success! Your Stripe token is <span class="token"></span>
    </div>
  </div>
</form>
      </div>
    );
  }
}
var mapStateToProps = function(state) {
  return {

  }
};

export default connect(mapStateToProps)(StripeComp);
