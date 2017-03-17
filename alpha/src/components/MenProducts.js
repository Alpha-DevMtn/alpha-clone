import React, { Component } from 'react';
import { Link } from 'react-router';
import Product from './Product';
import { getMensProducts } from './../services/productsService';
import './../styles/MenProducts.css';



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
        <Link to={"/products/" + item.product_id}>
          <div key={i}>
            <Product {...this.props} i={i} key={i} item={item} />
          </div>
        </Link>
      )
  })

    return (
      <div className='main-men'>
        <div className='mens-banner'> 
          <p>Mens</p>
        </div>
        <div className='men-the-filters'>
          <h4>FILTER BY: </h4>
          <select className='men-selection1'>
            <option value="">ALL MENS</option>
            <option value="">Bottoms</option>
            <option value="">Hats</option>
            <option value="">Hoodies</option>
            <option value="">Stringers</option>
            <option value="">T-Shirt</option>
          </select>
          <h4>SIZES IN STOCK:</h4>
          <select className='men-selection2'>
            <option value="">ALL SIZES</option>
            <option value="">Small</option>
            <option value="">Medium</option>
            <option value="">Large</option>
            <option value="">XL</option>
            <option value="">XXL</option>
          </select>
        </div>
        <div className='men-main-prods'>
          {maleProducts[0] ? maleProducts : <h1>Loading....</h1>}
        </div>
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
