import React, { Component } from 'react';
import { getCartItems } from './../services/productsService';
import './../styles/CartSlide.css';
import xicon from './../images/x-icon.png';

class CartSlide extends Component {

  constructor(props) {
        super(props)

        this.state = {
            fullCart: [],
            theCart: []
        }

    }

  componentWillMount() {
    const localStorageRef = localStorage.getItem(`my-cart`);
    if(localStorageRef) {
      this.setState({
        theCart: localStorageRef
      });
    }

    
  }


  render() {

    let eachOne = [];
    if (this.state.fullCart) {
      eachOne = this.state.fullCart.map(function(each) {
        return (
        <div className='cs-eachprod' >
          <div className='cs-pic'>
            <img src={each.imageurl} alt="" className='cs-actualpic'/>
          </div>
          <div className='cs-info'>
            <p>{each.prod_name} - {each.color}</p>
            <p>{each.price}</p>
          </div>
        </div>
        )
      }) 
    }

    return (
      <div className='cs-main'>
        {console.log('fullCart', this.state.fullCart)} 
        <div className='cs-exit'>
          <img src={xicon} alt="" className='cs-realexit'/>
        </div> 
        {eachOne}
        <div className='cs-buttons'>
          <button type="" className='cs-cont'>CONTINUE</button>
          <button type="" className='cs-check'>CHECKOUT</button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    getCartItems(this.state.theCart).then(items => {
      this.setState({
        fullCart: items
      })
    })
    
  }
}

export default CartSlide
