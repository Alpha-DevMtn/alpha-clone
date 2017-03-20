import React, { Component } from 'react';
import { getCartItems } from './../services/productsService';
import './../styles/Checkout.css';
import qtycircle from './../images/qty-circle.png';

class Checkout extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fullCart: []
        }
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

        var self = this;
    let eachOne = [];
    if (this.state.fullCart.code !== '22P02') {
      eachOne = this.state.fullCart.map(function(each, i) {
        return (
        <div  key={i} className='chk-single'>
          <div >
            <img src={each.imageurl} alt=""  className='chk-image'/>
            <img src={qtycircle} alt="" className='qtycircle-chk' />
            <p className='qty-chk'>{each.qty}</p>
          </div>
          <div >
            <p>{each.prod_name} - {each.color}</p>
            <p>{each.price}</p>
          </div>
        </div>
        )
      }) 
    }


        return (
            <div className='main-chk'>
                <div className='upper-chk'>
                    
                </div>
                <div className='mid-chk'>
                    <div className='left-chk'>
                        <p>Customer informatiion</p>
                        <input type="" name="" value="" placeholder='Email' className='chk-input'/>
                        <p>Shipping address</p>
                        <div>
                            <input type="" name="" value="" placeholder='First name' className='chk-input' />
                            <input type="" name="" value="" placeholder='Last name' className='chk-input' />
                        </div>
                        <div>
                            <input type="" name="" value="" placeholder='Company' className='chk-input'/>
                        </div>
                        <div>
                            <input type="" name="" value="" placeholder='Address' className='chk-input' />
                            <input type="" name="" value="" placeholder='Apt, suite, ets. (optional)' className='chk-input' />
                        </div>
                        <div>
                            <input type="" name="" value="" placeholder='City'  className='chk-input'/>
                        </div>
                        <div>
                            <select>
                                <option value=""></option>
                            </select>
                            <select>
                                <option value=""></option>
                            </select>
                            <input type="" name="" value="" placeholder='Zip code' className='chk-input' />
                        </div>
                        <div>
                           <input type="" name="" value="" placeholder='Phone' className='chk-input' /> 
                        </div>
                        
                    </div>
                    <div className='right-chk'>
                        {eachOne}
                    </div>
                </div>
                
            </div>
        )
        
    }
}

export default Checkout