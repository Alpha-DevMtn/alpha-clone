import React from 'react';
import { connect } from 'react-redux';
import { ship } from '../redux/checkout';
import { Link } from 'react-router';
import { hashHistory } from "react-router";

import '../styles/Customer.css';

	let countries = ["usa","canada","mexico"];

class ShippingInfo extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			shippingMethod: "standard"
		};
	}


	handleChange( type ) {
		this.setState( { shippingMethod: type } );
	}

  ship( event ) {
    event.preventDefault();
    this.props.dispatch( ship( {
        shipping: this.state.shipping
      , saveInfo: this.state.saveInfo
    } ) );
    hashHistory.push( "/payment" );
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
				<p>Shipping: {this.state.shipping}</p>
				<div className="plain">
					<div className="entry input-8">
						<p>Shipping address</p>
						<p>{this.props.orderInfo.firstName}</p>
					</div>

					<br/><br/><br/><br/>
					<h2>Shipping method</h2>
					<form>
					<div className="entry input-8">
              <input
  							onChange={ this.handleChange.bind( this, "standard" ) }
  							value="Standard"
  							type="radio"
								name="shipping"

  						/>Standard
					</div>
					<div className="entry input-8">
              <input
  							onChange={ this.handleChange.bind( this, "fedex" ) }
  							value="FedEx"
  							type="radio"
								name="shipping"
  						/>FedEx
					</div>
					</form>
</div>
				<div className = "plain">
					<button type="radio"></button>
					<p>Save this information for next time</p>

            <button
							onClick={ this.ship.bind( this ) }
							type="submit"
							className="info-button"
						>
					Continue to payment method
					</button>
					<Link to="/shipping"><p>&lt; Return to customer information</p></Link>
					</div>
				</div>
			</div>

		);
	}
}

export default connect(state => ( { orderInfo: state.checkout } ) )( ShippingInfo );