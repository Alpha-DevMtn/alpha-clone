import React, { Component } from 'react';
import './../styles/Product.css'
// import { connect } from 'react-redux';


class Product extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className='bord'>
        <img src={this.props.item.imageurl} className='thumbnail' />
        <p>{this.props.item.prod_name} - {this.props.item.color}</p>
        <h3>{this.props.item.price}</h3>
      </div>
    );
  }
}

export default Product;
