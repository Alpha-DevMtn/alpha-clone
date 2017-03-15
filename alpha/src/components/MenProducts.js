import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';
import { getMensProducts } from './../services/productsService';

export function getClothes() {
  return axios.get('http://practiceapi.devmounta.in/products')
  .then(res=> res.data)
}

class MenProducts extends Component {
  constructor() {
    super();

    this.state = {
      maleProducts: []
    }
  }

  render() {


  const maleProducts = this.state.maleProducts.map((item, i) => {
console.log('item: ', item);
  return (
    <div key={i}>
      {/*<h1>{item.prod_name}</h1>*/}
      <Product {...this.props} i={i} key={i} item={item} />
    </div>
    // <Link to={"clothes/" + item.prod_name}>
    
    // </Link>
    )
  })

    return (
      <div>
        <h1>Men Products</h1>
        {maleProducts[0] ? maleProducts : <h1>Loading....</h1>}
        <p>the end</p>
      </div>

    )
  }


  componentDidMount() {
    getMensProducts().then(clothes => {
      this.setState({
        maleProducts: clothes
      })
    });
  }

}


export default MenProducts
