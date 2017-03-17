import React, { Component } from 'react';
import { getCartItems } from './../services/productsService';

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
    return (
      <div>
        <p className="App-intro">
          CartSlide
          {console.log('theCart', this.state.theCart)}
          {console.log('fullCart', this.state.fullCart)}
        </p>
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
