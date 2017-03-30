import React from 'react';
import { connect } from 'react-redux';
import { ship } from '../redux/checkout';
import { Link } from 'react-router';
import { hashHistory } from "react-router";
import CheckoutProducts from './CheckoutProducts';
import '../styles/ShippingInfo.css';
import AlphaWt from './../images/alphaWhite.png';

	let countries = ["usa","canada","mexico"];

class ShippingInfo extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			shippingMethod: "standard",
			ships: 5.99
		};
	}


	handleChange( type ) {
		this.setState( { shippingMethod: type } );
	}
	fedExShip() {
		this.setState({
			ships: 10.99
		})
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
			<div className='shippinginfo-main'>
			<div className="header-si">
				<img src={AlphaWt} alt="ALPHA" className='alphaimg-si'/>
			</div>
			<div className='body-si'>
				<div className="left-si">
					<div className='goto-si'>
						<Link className="pay-links small-text" to="/customer">Customer information <span className="pay-gray">&gt; </span></Link>
						<Link className="pay-links small-text" to="/shipping">Shipping method <span className="pay-gray">&gt; </span></Link>
						<Link className="pay-links small-text" to="/payment">Payment method</Link>
					</div>
					<div className="si-info">
						<p>Shipping address</p>
						<p>{this.props.orderInfo.firstName}</p>		
					</div>
					<div className='sm-head-si'>
						<p>Shipping method</p>
					</div>
				<div className ="sm-si">
					<button type="radio" onClick={ this.fedExShip.bind( this )}></button>
					<button type="radio"></button>
					<Link to="/shipping"><p>&lt; Return to customer information</p></Link>
				</div>
				<button onClick={ this.fedExShip.bind( this )}
					type="submit" className="info-button-si">
					Continue to payment method
					</button>
				</div>
				<CheckoutProducts ships={this.state.ships} />
				</div>
			</div>

		);
	}
}

export default connect(state => ( { orderInfo: state.checkout } ) )( ShippingInfo );
