import React from 'react';
import { connect } from 'react-redux';
import { sendToStore } from '../redux/red1';

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



export default function Product(props) {
// class App extends Product {
  console.log('props.item: ', props.item);
  return (
    <div style={bord}>
      <h2>{props.item.title}</h2>
      <img src={props.item.image} alt="" style={imgStyle} />
    </div>
  )
}
