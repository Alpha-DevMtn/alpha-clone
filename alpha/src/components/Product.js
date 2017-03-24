import React, { Component } from 'react';
import './../styles/Product.css'
import plus from './../images/plus-icon.png';
// import { connect } from 'react-redux';


class Product extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className='bord-prod'>
        <img src={this.props.item.imageurl} className='thumbnail-prod' alt='' />
        <p>{this.props.item.prod_name} - {this.props.item.color}</p>
        <h4>${this.props.item.price}</h4>
        <img src={plus} alt="" className='plus-prod' />
      </div>
    );
  }
}

export default Product;
