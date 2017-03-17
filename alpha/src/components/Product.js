import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { sendToStore } from '../redux/red1';

const bord = {
   borderStyle: 'solid',
   width: '210px',
   height: '310px',
   margin: '10px',
   float: 'left'
}

const imgStyle = {
  width: '200px'
}



class Product extends Component {

  constructor(props){
    super(props);

  }


  render() {
    return (
      <div style={bord}>
      <img src={this.props.item.imageurl} alt="" style={imgStyle} />
      <h3>{this.props.item.prod_name} - {this.props.item.color}</h3>
      <h3>{this.props.item.price}</h3>

      </div>
    );
  }
}

export default Product;
