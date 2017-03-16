import React, { Component } from 'react';
import './../styles/Product.css'
// import { connect } from 'react-redux';
// import { sendToStore } from '../redux/red1';

class Product extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return (
<<<<<<< HEAD
      <div className='bord'>
        <img src={this.props.item.imageurl} className='thumbnail' />
        <p>{this.props.item.prod_name} - {this.props.item.color}</p>
        <h3>{this.props.item.price}</h3>
=======
      <div style={bord}>
      <img src={this.props.item.imageurl} alt="" style={imgStyle} />
      <h3>{this.props.item.prod_name} - {this.props.item.color}</h3>
      <h3>{this.props.item.price}</h3>

>>>>>>> master
      </div>
    );
  }
}

export default Product;
