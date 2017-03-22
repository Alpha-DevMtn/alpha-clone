import React from 'react';
import { connect } from 'react-redux';
import { ship } from '../redux/checkout';
import { Link } from 'react-router';
import { hashHistory } from "react-router";

import '../styles/Customer.css';

	let countries = ["usa","canada","mexico"];

class Payment extends React.Component {
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
			<div>
			<div className="header">
				<img src="" alt="ALPHA"/>
			</div>
			<div className="right">right</div>
			<div className="left">
				<Link className="pay-links small-text" to="/customer">Customer information <span className="pay-gray">&gt; </span></Link>
				<Link className="pay-links small-text" to="/shipping">Shipping method <span className="pay-gray">&gt; </span></Link>
				<Link className="pay-links small-text" to="/payment">Payment method</Link>
				<h2>Payment</h2>
        <p>{this.props.orderInfo.firstName}</p>

				<div className="plain">
					<div className="entry input-8">
							<input
								onChange={ this.handleChange.bind( this, "standard" ) }
								value="Standard"
								type="radio"
								name="shipping"

							/>Credit Card
					</div>
					<div className="grey">
						<div className="entry input-8">

								<input
									onChange={ this.handleChange.bind( this, "shipping" ) }
									placeholder="Card number"
									type="text"
									value={ this.state.shipping }
								/>
						</div>
						<div className="entry input-3">

	              <input
	  							onChange={ this.handleChange.bind( this, "shipping" ) }
	  							placeholder="Name on card"
	  							type="text"
	  							value={ this.state.shipping }
	  						/>
						</div>
						<div className="entry input-3">

	              <input
	  							onChange={ this.handleChange.bind( this, "saveInfo" ) }
	  							placeholder="MM / YY"
	  							type="text"
	  							value={ this.state.saveInfo }
	  						/>
						</div>
						<div className="entry input-2">

								<input
									onChange={ this.handleChange.bind( this, "saveInfo" ) }
									placeholder="CVV"
									type="text"
									value={ this.state.saveInfo }
								/>
						</div>
					</div>
					<div className="entry input-8">
							<input
								onChange={ this.handleChange.bind( this, "standard" ) }
								value="Standard"
								type="radio"
								name="shipping"

							/>PayPal
					</div>
					<div className="entry input-8">
							<input
								onChange={ this.handleChange.bind( this, "standard" ) }
								value="Standard"
								type="radio"
								name="shipping"

							/>amazon pay
					</div>
					<div className="entry input-8">
							<input
								onChange={ this.handleChange.bind( this, "standard" ) }
								value="Standard"
								type="radio"
								name="shipping"

							/>Bitcoin
					</div>
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
								<input
									onChange={ this.handleChange.bind( this, "standard" ) }
									value="Standard"
									type="radio"
									name="shipping"

								/>Use a different billing address
						</div>
				</div>

				<div className = "plain">
					<button type="radio"></button>
					<p>Save this information for next time</p>

            <button
							onClick={ this.ship.bind( this ) }
							type="submit"
						>
					Continue to payment method
					</button>
					<Link to="/shipping"><p>&lt; Return to shipping method</p></Link>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(state => ( { orderInfo: state.checkout } ) )( Payment );
