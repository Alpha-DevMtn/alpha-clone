import React from 'react';

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
  console.log('props.item: ', props.item);
  return (
    <div style={bord}>
      <h2>{props.item.title}</h2>
      <img src={props.item.image} alt="" style={imgStyle} />
    </div>
  )
}
