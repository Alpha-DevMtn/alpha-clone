import React, { Component } from 'react';

class WomenProducts extends Component {
  constructor() {
    super();

    this.state = {
      femaleProducts: []
    }
  }

  render() {

    console.log('WomenProducts');
    const femaleProducts = this.state.femaleProducts.map((item, i) => {
    return (
item
      // <Link to={"femaleProducts/" + item.name}>
      // <Item {...this.props} i={i} key={i} item={item} />
      // </Link>
    )
  })
    return (
      <div>
        <h1>Women Products</h1>
      </div>
    )
  }
}

export default WomenProducts
