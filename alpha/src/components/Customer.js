import React from 'react';
import { connect } from 'react-redux';
import { gatherInfo } from '../redux/checkout';
import { Link } from 'react-router';
import { hashHistory } from "react-router";
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
			<div>
			<div className="header">
				<img src={alphaWhite} alt="ALPHA"/>
			</div>
			<div className="right">right</div>
			<div className="left">
				<Link className="pay-links small-text" to="/customer">Customer information <span className="pay-gray">&gt; </span></Link>
				<Link className="pay-links small-text" to="/shipping">Shipping method <span className="pay-gray">&gt; </span></Link>
				<Link className="pay-links small-text" to="/payment">Payment method</Link>

				<div className="paypal"><img src={paypal} alt=""/></div>
				<div className="amazon-pay"><img src={amazonpay} alt=""/></div>
			<p>or</p>
				<h2>Customer information</h2>
				<div className="entry input-8">
					<p className="small-text">Email (optional)</p>
				</div>
				<button type="radio"></button>
				<p>Save this information for next time</p>
				<h2>Shipping address</h2>
				<div className="plain">

					<div className="entry input-4">
						<p style={this.state.firstName ? {display:'block'} :{display:'none'} } className="small-text">First name</p>
						<input
							onChange={ this.handleChange.bind( this, "firstName" ) }
							placeholder="First Name"
							type="text"
							value={ this.state.firstName }
						/>
					</div>
					<div className="entry input-4">
						<p style={this.state.lastName ? {display:'block'} :{display:'none'} } className="small-text">Last name</p>
						<input
							onChange={ this.handleChange.bind( this, "lastName" ) }
							placeholder="Last Name"
							type="text"
							value={ this.state.lastName }
						/>
					</div>
					<div className="entry input-8">
						<p className="small-text">Company (optional)</p>
					</div>
					<div className="entry input-5">
						<p className="small-text">Address</p>
					</div>
					<div className="entry input-3">
						<p className="small-text">Apt, suite, etc. (optional)</p>
					</div>
					<div className="entry input-8">
						<p className="small-text">City</p>
					</div>
					<div className="entry input-3">
						<p className="small-text">Country</p>
						<form>
						<select>
							{this.country}
						</select>
						</form>
					</div>
					<div className="entry input-3">
						<p className="small-text">State</p>
					</div>
					<div className="entry input-2">
						<p className="small-text">Zip code</p>
					</div>
					<div className="entry input-8">
						<p className="small-text">Phone</p>
					</div>
				</div>
				<div className = "plain">
					<button type="radio"></button>
					<p>Save this information for next time</p>

					<button
						onClick={ this.gatherInfo.bind( this ) }
						type="button"
						className="info-button"
					>
					Continue to shipping method
					</button>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(state => ( { orderInfo: state.checkout } ) )( Customer );
