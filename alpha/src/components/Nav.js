import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Nav.css';
import alphaWhite from './../images/alphablack.png';
import CartSlide from './CartSlide';
import xicon from './../images/x-icon.png';
import { connect } from 'react-redux';
import { visible } from '../redux/showCart';

class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      display : 'none-cs',
      quant: 0,
      show: false
    }
  }

  showCart(){
    event.preventDefault();
    this.props.dispatch( visible( {
        slide: 'show-cs'
    }));
  }

  hideCart() {
		event.preventDefault();
		this.props.dispatch( visible( {
			  slide: 'none-cs'
		}));
	}


  render(){
    return (
      <div className="nav-main">
          <Link to="/" className='nav-lefty'>
            <img src={alphaWhite} className='nav-alpha-wt' alt=''/>
          </Link>
          <div className="nav-center">
          <div className='dropdown-sto-nav'>
            <p className="p-drop">STORE <span className="fa fa-angle-down"></span></p>
            <div className='store-nav'>
              <Link to="/mens"><p className="store-men">MEN</p></Link>
                <Link to="/womens"><p>WOMEN</p></Link>
                <p>HEADWEAR</p>
                <p>3D KNITTED™</p>
            </div>
          </div>
          <div className='dropdown-brand-nav'>
            <p className="p-drop">BRAND <span className="fa fa-angle-down"></span></p>
            <div className='brand-nav'>
              <p>ABOUT US</p>
              <p>GIVE BACK</p>
            </div>
          </div>
          <div className='dropdown-looks-nav'>
            <p className="p-drop">LOOKS</p>
          </div>
          <div className='dropdown-sup-nav'>
            <p className="p-drop">SUPPORT <span className="fa fa-angle-down"></span></p>
            <div className='sup-nav'>
              <p>FAQ</p>
              <p>SIZING GUIDE</p>
            </div>
          </div>
        </div>
        <div className="nav-right">
          <div className="currency-wrap">
            <select className="currency">
              <option value="">USD</option>
              <option value="">CAD</option>
              <option value="">AUD</option>
              <option value="">GBP</option>
              <option value="">EUR</option>
              <option value="">JPY</option>
            </select>
          </div>

          <div className="cart-button">
            <span className="fa fa-cart-plus" onClick={ this.showCart.bind( this ) }></span>
            <span className="empty-nav"></span>
            <span className="fa fa-square-0 cart-count">{this.props.cartLogic.quant}</span>
          </div>
          <div className={this.props.cartLogic.display}>
            <div  onClick={ this.hideCart.bind( this ) } className='exitdiv-cs'>
              <button type="" className='cs-realexit'>x</button>
            </div>
            <CartSlide  />
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const localStorageRef = JSON.parse(localStorage.getItem(`my-cart`)) || [];
    if(localStorageRef) {

    }
  }

}

export default connect(state => ( { cartLogic: state.showCart } ) )( Nav );
