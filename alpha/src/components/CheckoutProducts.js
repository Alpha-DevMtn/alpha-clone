import React from 'react';
import { getCartItems } from './../services/productsService';
import './../styles/CheckoutProducts.css';

class CheckoutProducts extends React.Component {
    constructor( props ) {
		super( props );

		this.state = {
			fullCart: []
		};
	}

    componentWillMount() {
		const localStorageRef = JSON.parse(localStorage.getItem(`my-cart`));

        var ids = [];
    for (var i = 0; i < localStorageRef.length; i++) {
      ids.push(localStorageRef[i].id)
    }

     getCartItems(ids).then(items => {
      
      for (var i = 0; i < items.length; i++) {
        for (var j = 0; j < localStorageRef.length; j++) {
          if (items[i].product_id === localStorageRef[j].id) {
            items[i].qty = localStorageRef[j].qty
          }
        }
      }
      
      this.setState({
        fullCart: items
      })
    })
	}

    render() {

        let eachOne = [];
    	if (this.state.fullCart.code !== '22P02') {
      		eachOne = this.state.fullCart.map(function(each, i) {
        		return (
        			<div  key={i} className='chk-single'>
          			<div className='chk-imagebox'>
            		<img src={each.imageurl} alt=""  className='chk-image'/>
            		<div className='qtycircle-chk'>
                		<p className='qty-chk'>{each.qty}</p>
            		</div>
          		</div>
          		<div className='chk-singleinfo'>
            		<p>{each.prod_name} - {each.color}</p>
            		<p>{each.price}</p>
          		</div>
        	</div>
        )
      }) 
    }

        return (
            <div className="right">
				{eachOne}
			</div>
        )
    }


}
export default CheckoutProducts;