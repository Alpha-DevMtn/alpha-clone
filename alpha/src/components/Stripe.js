import React from 'react';
// var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;
import {ReactScriptLoaderMixin} from 'react-script-loader';
import { connect } from 'react-redux';
import '../redux/checkout';
import '../styles/Payment.css';

class PaymentForm extends React.Component {

  constructor( props ) {
    super(props);

    this.state = {
      stripeLoading: true,
      stripeLoadingError: false,
      submitDisabled: false,
      paymentError: null,
      paymentComplete: false,
      token: null
    };
    mixins: [ ReactScriptLoaderMixin ]


    this.onScriptLoaded = this.onScriptLoaded.bind(this);
    this.onScriptError = this.onScriptError.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  getScriptURL() {
    return 'https://js.stripe.com/v2/';
  }

  onScriptLoaded() {
    if (!PaymentForm.getStripeToken) {
      // Put your publishable key here
      window.Stripe.setPublishableKey('pk_test_OEbrxRvG9isWqPAuwiSijp0Y');
      this.setState({ stripeLoading: false, stripeLoadingError: false });
    }
  }

  onScriptError() {
    this.setState({ stripeLoading: false, stripeLoadingError: true });
  }

  onSubmit(event) {
    var self = this;
    event.preventDefault();
    this.setState({ submitDisabled: true, paymentError: null });
    // send form here
    window.Stripe.createToken(event.target, function(status, response) {
      if (response.error) {
        self.setState({ paymentError: response.error.message, submitDisabled: false });
        console.log('bad response: ', response);
      }
      else {
        self.setState({ paymentComplete: true, submitDisabled: false, token: response.id });
        // make request to your server here!
        console.log('good response: ', response);
        console.log("stripe gets props:", this)
      }
    });
  }

  componentWillMount() {
    this.onScriptLoaded()
  }

  render() {
    if (this.state.stripeLoading) {
      return <div>Loading</div>;
    }
    else if (this.state.stripeLoadingError) {
      return <div>Error</div>;
    }
    else if (this.state.paymentComplete) {
      return <div>Payment Complete!</div>;
    }
    else {
      return (<form onSubmit={this.onSubmit} className='noc-cc-pmt'>
        <span>{ this.state.paymentError }</span><br />
        <div className='cc-upper'>
           <input type='text' data-stripe='number' placeholder='credit card number' className='crd-num-pmt'/>
        </div>
        <div className='cc-lower'>
          <input type='text' data-stripe='exp-month' placeholder='exp month' className='exp-dt-pmt'/>
          <input type='text' data-stripe='exp-year' placeholder='exp year' className='exp-dt-pmt'/>
          <input type='text' data-stripe='cvc' placeholder='cvc' className='sec-pmt'/>
        </div>
        
        <input disabled={this.state.submitDisabled} type='submit' value='Purchase' />
      </form>);
    }
  }
};

export default connect(state => ( { orderInfo: state.checkout } ) )( PaymentForm );
