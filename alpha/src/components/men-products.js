import React, { Component } from 'react';

class Men extends Component {
  constructor() {
    super();

    this.state = {
      maleProducts: []
    }
  }

  render() {

    const maleProducts = this.state.maleProducts.map((item, i) => {
    return (

      // <Link to={"maleProducts/" + item.name}>
      <Item {...this.props} i={i} key={i} item={item} />
      // </Link>
    )
  })
    return (
      <div>

      </div>
    )
  }
}

export default Men
