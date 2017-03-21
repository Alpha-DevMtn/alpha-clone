import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/checkout';
import { Link } from 'react-router';
import { hashHistory } from "react-router";

import '../styles/Customer.css';

let countries = ["usa","canada","mexico"];

class Customer extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			firstName: ""
			, lastName: ""
			// , countries: ["us","canada","mexico"]
		};
	}


	handleChange( field, event ) {
		this.setState( { [ field ]: event.target.value } );
	}

	login( event ) {
		event.preventDefault();
		this.props.dispatch( login( {
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
				<img src="" alt="ALPHA"/>
			</div>
			<div className="right">right</div>
			<div className="left">
				<Link className="pay-links small-text" to="/customer">Customer information <span className="pay-gray">&gt; </span></Link>
				<Link className="pay-links small-text" to="/shipping">Shipping method <span className="pay-gray">&gt; </span></Link>
				<Link className="pay-links small-text" to="/payment">Payment method</Link>
				<h2>Shipping address</h2>
				<div className="plain">
					<div className="entry input-8">
						<p className="small-text">Email (optional)</p>
					</div>
					<div className="entry input-4">
						<p className="small-text">First name</p>
						<input
							onChange={ this.handleChange.bind( this, "firstName" ) }
							placeholder="First Name"
							type="text"
							value={ this.state.firstName }
						/>
					</div>
					<div className="entry input-4">
						<p className="small-text">Last name</p>
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
						onClick={ this.login.bind( this ) }
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
