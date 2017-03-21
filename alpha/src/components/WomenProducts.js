import React, { Component } from 'react';
import { Link } from 'react-router';
import Product from './Product';
import { getWomensProducts } from './../services/productsService';
import './../styles/WomenProducts.css';

class WomenProducts extends Component {
  constructor() {
    super();

    this.state = {
      femaleProducts: []
    }
  }

  render() {

    const femaleProducts = this.state.femaleProducts.map((item, i) => {
      
      return (
        <Link to={"/products/" + item.product_id}>
          <div>
            <Product {...this.props} i={i} key={i} item={item} />
          </div>
        </Link>
      )
    })
    return (
      <div className='main-women'>
        <div className='womens-banner'> 
          <p>Womens</p>
        </div>
        <div className='women-the-filters'>
          <h4>FILTER BY: </h4>
          <select className='women-selection1'>
            <option value="">ALL WOMENS</option>
            <option value="">Bottoms</option>
            <option value="">Hats</option>
            <option value="">Hoodies</option>
            <option value="">Stringers</option>
            <option value="">T-Shirt</option>
          </select>
          <h4>SIZES IN STOCK:</h4>
          <select className='women-selection2'>
            <option value="">ALL SIZES</option>
            <option value="">xs</option>
            <option value="">Small</option>
            <option value="">Medium</option>
            <option value="">Large</option>
          </select>
        </div>
        <div className='women-main-prods'>
          {femaleProducts[0] ? femaleProducts : <h1>Loading....</h1>}
        </div>
      </div>
    )
  }

  componentDidMount() {
    getWomensProducts().then(clothes => {
      this.setState({
        femaleProducts: clothes
      })
    })
  }
}

export default WomenProducts
