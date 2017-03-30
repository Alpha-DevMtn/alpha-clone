import React from 'react';
import { connect } from 'react-redux';
import { ship } from '../redux/checkout';
import { Link } from 'react-router';
import { hashHistory } from "react-router";
import CheckoutProducts from './CheckoutProducts';
// import StripeComp from './StripeComp';
import Stripe from './Stripe';
import AlphaWhite from './../images/alphaWhite.png';

import '../styles/Payment.css';

	let countries = ["usa","canada","mexico"];

class Payment extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			firstName: ""
			, lastName: "",
			ships: JSON.parse(localStorage.getItem(`shipping-cost`))
			// , countries: ["us","canada","mexico"]
		};
	}


	handleChange( field, event ) {
		this.setState( { [ field ]: event.target.value } );
	}

  ship( event ) {
    event.preventDefault();
    this.props.dispatch( ship( {
        shipping: this.state.shipping
      , saveInfo: this.state.saveInfo
    } ) );
    console.log('props: ', this.props);
  }



	country = countries.map((item, i) => {
		return (
			<option key={i} value="{item}">{item}</option>
		)
	});


	render() {
		return (
			<div className='pmt-main'>
				<div className="header-pmt">
					<img src={AlphaWhite} alt="ALPHA" className='alpha-wht-pmt' />
				</div>
				<div className='mb-pmt'>
				<div className="left-pmt">
					<div className='change-pg-pmt'>
						<Link className="pay-links small-text" to="/customer">Customer information <span className="pay-gray">&gt; </span></Link>
						<Link className="pay-links small-text" to="/shipping">Shipping method <span className="pay-gray">&gt; </span></Link>
						<Link className="pay-links small-text" to="/payment">Payment method</Link>
					</div>
					<div className='pmt-mthd-head'>
						<p className='pmt-mthd-txt'>Payment method</p>
						<p className='all-trns-pmt-txt'>All transactions are secure and encrypted.</p>
					</div>
					<div className='cc-info-pmt'>
						<div className='cc-select-pmt'>
							<input
								onChange={ this.handleChange.bind( this, "standard" ) }
								value="Standard"
								type="radio"
								name="shipping"

							/>Credit Card
						</div>
						<div className='crd-info-hddn-pmt'>
							<Stripe/>
						</div>
						<div className='pp-select-pmt'>
							<input
								onChange={ this.handleChange.bind( this, "standard" ) }
								value="Standard"
								type="radio"
								name="shipping"

							/>PayPal
						</div>
						<div className='ap-select-pmt'>
							<input
								onChange={ this.handleChange.bind( this, "standard" ) }
								value="Standard"
								type="radio"
								name="shipping"

							/>amazon pay
						</div>
						<div className='bc-select-pmt'>
							<input
								onChange={ this.handleChange.bind( this, "standard" ) }
								value="Standard"
								type="radio"
								name="shipping"

							/>Bitcoin
						</div>
					</div>
					<div className="plain">
					<h3>Billing address</h3>
						<div className="entry input-8">
								<input
									onChange={ this.handleChange.bind( this, "standard" ) }
									value="Standard"
									type="radio"
									name="shipping"

								/>Same as shipping address
						</div>
						<div className="entry input-8">
							<input onChange={ this.handleChange.bind( this, "standard" ) }
									value="Standard"
									type="radio"
									name="shipping"/>
									Use a different billing address
						</div>
					</div>
					<div className = "plain">
						<button type="radio"></button>
						<p>Save this information for next time</p>
            			<button onClick={ this.ship.bind( this ) } type="submit">
						Complete order
						</button>
						<Link to="/shipping"><p>&lt; Return to shipping method</p></Link>
					</div>
				</div>
				<CheckoutProducts ships={this.state.ships}/>
				</div>
			</div>
		);
	}
}

export default connect(state => ( { orderInfo: state.checkout } ) )( Payment );
