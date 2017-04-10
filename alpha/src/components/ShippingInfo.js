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
	standardShip() {
		this.setState({
			ships: 5.99
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

setLocalHost() {
	localStorage.setItem('shipping-cost', JSON.stringify(this.state.ships));
}

	country = countries.map((item, i) => {
		return (
			<option key={i} value="{item}">{item}</option>
		)
	});


	render() {
		console.log('this.props.orderInfo: ', this.props.orderInfo);
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
						<h4>Shipping address</h4>
						<p>{this.props.orderInfo.firstName} {this.props.orderInfo.lastName}</p>
						<p>{this.props.orderInfo.company}</p>
						<p>{this.props.orderInfo.address} {this.props.orderInfo.apt}</p>
						<p>{this.props.orderInfo.city} {this.props.orderInfo.usstate} {this.props.orderInfo.zip}</p>
						<p>{this.props.orderInfo.country}</p>
						<p>{this.props.orderInfo.phone}</p>	
					</div>
					<div className='sm-head-si'>
						<p>Shipping method</p>
					</div>
				<div className ="sm-si">
						<div className='sm-si1'>
							<input type="radio" name="shipping" value="" defaultChecked onClick={ this.standardShip.bind( this )}/>Standard - FedEx SmartPost (4-8 Business Days)
						</div>
						<div className='sm-si2'>
							<input type="radio" name="shipping" value="" onClick={ this.fedExShip.bind( this )} />FedEx Home Delivery (1-4 Business Days)
						</div>
						
					
				</div>
				<Link to='/payment'>
				<button 
					type="submit" className="info-button-si" onClick={this.setLocalHost.bind(this)}>
					Continue to payment method
					</button>
				</Link>
				</div>
				<CheckoutProducts ships={this.state.ships} money='$' />
				</div>
			</div>

		);
	}
}

export default connect(state => ( { orderInfo: state.checkout } ) )( ShippingInfo );
