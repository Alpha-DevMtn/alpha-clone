import React from 'react';
import { getCartItems } from './../services/productsService';
import './../styles/CheckoutProducts.css';
import { connect } from 'react-redux';
import { check } from '../redux/checkout';

class CheckoutProducts extends React.Component {
    constructor( props ) {
		super( props );

		this.state = {
			fullCart: [],
      subtotal: 0,
      total: 0
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
      
      var tot = 0;
      console.log('itemsss', items)
      for (var q = 0; q < items.length; q++) {
        tot += items[q].price * items[q].qty;
      }

      this.setState({
        subtotal: tot.toFixed(2)
      })
      var everything = 0;
      if (isNaN(this.props.ships)) {
        everything = tot;
        this.setState({
        total: everything.toFixed(2)
      })
      } else {
        everything = tot + this.props.ships;
      this.setState({
        total: everything.toFixed(2)
      })
      }
      this.props.dispatch( check( {
        totalPrice: this.state.total
      } ) );

      console.log('tottt', tot)
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
            		<p>${each.price}</p>
          		</div>
        	</div>
        )
      })
    }

        return (
            <div className="right-chk">
				      {eachOne}
              <div className='gift-chk'>
                <input type="" name="" value="" placeholder='Gift card or discount code' className='giftin-chk'/>
                <button type="" className='giftbut-chk'>Apply</button>
              </div>
              <div className='prices-chk'>
                <div className='subtotal-chk'>
                    <p>Subtotal</p>
                    <p>${this.state.subtotal}</p>
                </div>
                <div className='shippingcost-chk'>
                  <p>Shipping</p>
                  <p>${this.props.ships}</p>
                </div>
                <div className='totalcost-chk'>
                <p>Total</p>
                <p>${this.state.total}</p>
              </div>
              </div>
			      </div>
        )
    }

}

export default connect(state => ( { orderInfo: state.checkout } ) )( CheckoutProducts );
