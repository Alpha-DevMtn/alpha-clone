import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Product from './Product';
import { getMensProducts } from './../services/productsService';
// import ProductPage from './ProductPage';

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
    <Link to={"/mens/" + item.product_id}>
      <div key={i}>
        <Product {...this.props} i={i} key={i} item={item} />
      </div>
    </Link>
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
