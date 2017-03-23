import React from 'react';
import { connect } from 'react-redux';
import { gatherInfo } from '../redux/checkout';
import { Link } from 'react-router';
import { hashHistory } from "react-router";
import CheckoutProducts from './CheckoutProducts';
import paypal from './../images/paypal.png';
import amazonpay from './../images/amazonpay.png';
import alphaWhite from './../images/alphaWhite.png';
import countries from './../services/checkoutService';
import '../styles/Customer.css';

class Customer extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			firstName: ""
			, lastName: ""
		};
	}

	handleChange( field, event ) {
		this.setState( { [ field ]: event.target.value } );
	}

	gatherInfo( event ) {
		event.preventDefault();
		this.props.dispatch( gatherInfo( {
			  firstName: this.state.firstName
			, lastName: this.state.lastName
		} ) );
		hashHistory.push( "/shipping" );
		console.log('props: ', this.props);
		console.log('state: ', this.state);
	}



	country = countries.map((item, i) => {
		return (
			<option key={i} value="{item}">{item}</option>
		)
	});

	render() {

		return (
			<div className='main-cstmr'>
			<div className="header">
				<img src={alphaWhite} alt="ALPHA" className='header-pic-cstmr'/>
			</div>
			<div className='body-cstmr'>
			<div className="left">
				<div className='pmt-opt-cstmr'>
					<Link className="pay-links small-text" to="/customer">Customer information <span className="pay-gray">&gt; </span></Link>
					<Link className="pay-links small-text" to="/shipping">Shipping method <span className="pay-gray">&gt; </span></Link>
					<Link className="pay-links small-text" to="/payment">Payment method</Link>
				</div>
					<div className='pmt-options'>
						<div className="paypal">
							<img src={paypal} alt="" className='paypal-img'/></div>
							<div className="amazon-pay">
								<img src={amazonpay} alt="" className='amazon-pay-img'/></div>
							</div>
							<div className='cstmr-orr'>
								<div className='cstmr-hr'>
								</div>
								<p>OR</p>
								<div className='cstmr-hr'>
								</div>
							</div>
							<div className='cstmrsinfo-login'>
								<p>Customer information</p>
								<p>Already have an account? 								<span>Log in</span></p>
							</div>
							<div className="entry input-8">
								<p className="small-text">Email</p>
							</div>
							<div className='nwsltr-cstmr'>
								<input type="checkbox" name="" value="" />
								<p>Subscribe to our newsletter</p>
							</div>
							<div className='shp-addr-hdr-cstmr'>
								<p>Shipping address</p>
							</div>
							<div className="plain">
								<div className='plain-ln1-cstmr'>
								<div className="entry input-4">
									<p style={this.state.firstName ? {display:'block'} :{display:'none'} } className="small-text">First name</p>
						<input
							onChange={ this.handleChange.bind( this, "firstName" ) }
							placeholder="First Name"
							type="text"
							value={ this.state.firstName }
						/>
					</div>
					<div className="entry input-4-ln">
						<p style={this.state.lastName ? {display:'block'} :{display:'none'} } className="small-text">Last name</p>
						<input
							onChange={ this.handleChange.bind( this, "lastName" ) }
							placeholder="Last Name"
							type="text"
							value={ this.state.lastName }
						/>
					</div>
					</div>
					<div className="entry input-8">
						<p className="small-text">Company (optional)</p>
					</div>
					<div className='addr-cstmr-stuff'>
						<div className="entry input-5">
							<p className="small-text">Address</p>
						</div>
						<div className="entry input-3">
							<p className="small-text">Apt, suite, etc. (optional)</p>
						</div>
					</div>
					<div className="entry input-8">
						<p className="small-text">City</p>
					</div>
					<div className='locations-cstmr'>
						<div className="entry input-3-loc">
						<p className="small-text">Country</p>
						<form>
						<select className='cntryslct-cstmr'>
							{this.country}
						</select>
						</form>
						</div>
						<div className="entry input-3-loc">
							<p className="small-text">State</p>
						</div>
						<div className="entry input-2">
							<p className="small-text">Zip code</p>
						</div>
					</div>
					
					<div className="entry input-8">
						<p className="small-text">Phone</p>
					</div>
				</div>
				<div className = "bottom-cstmr">
					<button
						onClick={ this.gatherInfo.bind( this ) }
						type="button"
						className="info-button"
					>
					Continue to shipping method
					</button>
				</div>
				</div>
				<CheckoutProducts ships='-' />
				</div>
			</div>
		);
	}
}

export default connect(state => ( { orderInfo: state.checkout } ) )( Customer );
