import React, { Component } from 'react';
import { Link } from 'react-router';
import Product from './Product';
import { getMensProducts, getMensProductsFiltered } from './../services/productsService';
import './../styles/MenProducts.css';



class MenProducts extends Component {
  constructor() {
    super();

    this.state = {
      maleProducts: []
    }
  }

  filterBy(event) {
    console.log('event.target.value: ', event.target.value);
    getMensProductsFiltered(event.target.value).then(clothes => {
      this.setState({
        maleProducts: clothes
      })
    });
  }

  render() {

    const maleProducts = this.state.maleProducts.map((item, i) => {

      return (
        <Link to={"/products/" + item.product_id}>

            <Product {...this.props} i={i} key={i} item={item} />

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
          <select className='men-selection1' onChange={this.filterBy.bind(this)}>
            <option value="all">ALL MENS</option>
            <option value="bottoms">Bottoms</option>
            <option value="hats">Hats</option>
            <option value="Hoodies">Hoodies</option>
            <option value="stringers">Stringers</option>
            <option value="t-shirt">T-Shirt</option>
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
