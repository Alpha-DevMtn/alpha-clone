import React, { Component } from 'react';
import { getCartItems } from './../services/productsService';
import { Link } from 'react-router';
import './../styles/CartSlide.css';
import { visible } from '../redux/showCart';
import { connect } from 'react-redux';


class CartSlide extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fullCart: [],
      theCart: [],
      total: 0
    }
    this.quantityChange = this.quantityChange.bind(this)
  }

  hideCart() {
		event.preventDefault();
		this.props.dispatch( visible( {
			  slide: 'none-cs'
		}));
	}

  componentWillMount() {
    const localStorageRef = JSON.parse(localStorage.getItem(`my-cart`)) || [];
    if(localStorageRef) {
      this.setState({
        theCart: localStorageRef
      });
    }

    var ids = [];
    for (var i = 0; i < localStorageRef.length; i++) {
      ids.push(localStorageRef[i].id)
    }


    getCartItems(ids).then(items => {

      for (var i = 0; i < items.length; i++) {
        for (var j = 0; j < localStorageRef.length; j++) {
          if (items[i].product_id === localStorageRef[j].id) {
            items[i].qty = localStorageRef[j].qty
          }
        }
      }

      this.setState({
        fullCart: items
      })
    })

  }

  quantityChange(event, quantity, id) {
    if (event) {
      quantity = event.target.value * 1
    }
    var cart = this.state.fullCart;
    var theCart = this.state.theCart;
    var total;
    console.log('karl', cart)
    if (quantity < 1) {
      cart = cart.filter(item => item.product_id !== id);
      theCart = theCart.filter(item => item.id !== id);
      console.log('BOTH', cart, theCart)
    } else {
      cart.forEach(item => item.product_id == id ? item.qty = quantity: null);
      theCart.forEach(item => item.id == id ? item.qty = quantity: null);

    }

    this.setState({
      fullCart: cart,
      theCart: theCart
    });
    localStorage.setItem('my-cart', JSON.stringify(theCart));
  }

  render() {
    var self = this;
    let eachOne = [];
    if (this.state.fullCart.code !== '22P02') {
      eachOne = this.state.fullCart.map(function(each, i) {
        return (
        <div className='cs-eachprod' key={i}>
          <div className='cs-pic'>
            <img src={each.imageurl} alt="" className='cs-actualpic'/>
          </div>
          <div className='cs-info'>
            <p>{each.prod_name} - {each.color}</p>
            <p>{each.price}</p>
            <button type="" onClick={
              () => self.quantityChange(null, each.qty - 1, each.product_id)
            } className='cs-quantbutton'>-</button>
            <input type="number" name="" value={each.qty} onChange={e => self.quantityChange(e, 1, each.product_id)} className='inputnum-cs' />
            <button type="" onClick={
              () => self.quantityChange(null, each.qty + 1, each.product_id)
            } className='cs-quantbutton'>+</button>
          </div>
        </div>
        )
      })
    }

    return (
      <div className='main-cs'>
        {eachOne}
        <div className='cs-buttons'>
          <button type="" onClick={ this.hideCart.bind( this ) } className='cs-cont'>CONTINUE</button>
          <Link to={'/checkout'}>
            <button type="" className='cs-check'>CHECKOUT</button>
          </Link>
        </div>
        {console.log('total', this.state.total)}
      </div>
    );
  }



}

export default connect(state => ( { cartLogic: state.showCart } ) )( CartSlide );
