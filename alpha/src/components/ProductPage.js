import React, { Component } from 'react';
import { Link } from 'react-router';
import { getProduct } from './../services/productsService';
import './../styles/ProductPage.css';

class ProductPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: {},
            cart: []
        }

        this.addToCart = this.addToCart.bind(this);
    }

    componentWillMount() {
        getProduct(this.props.params.product_id).then(item => {
            this.setState({item})
        })
    }
    
    addToCart(id) {
        var cart = this.state.cart;
        cart.push(id);
        this.setState({cart});
        localStorage.setItem('my-cart', JSON.stringify(cart));
    }

    render() {
        console.log('sizes', this.state.item)
        let sizes = [];
        if (this.state.item.sizes) {
            sizes = this.state.item.sizes.map(function(size) {
            return (<option value={size}>{size}</option>)
            })
        }
        let info = [];
        if (this.state.item.info) {
            info = this.state.item.info.map(function(info) {
                return(<p>{info}</p>)
            })
        }

        return (
            <div className='main-pp'>
                <div className='upper-pp'>
                    <div className='thepic-pp'>
                        <img src={this.state.item.imageurl} className='imgmain-pp' alt=''/>  
                    </div>
                    
                    <div className='info-pp'>
                        <p className='title-pp'>{this.state.item.prod_name} - {this.state.item.color}</p>
                        <h2>{this.state.item.price}</h2>
                        <h3 className='size-pp'>SIZE:</h3>
                        <select className='sizes-pp'>
                            {sizes}
                        </select>
                        <Link to={"/cart"}>
                            <button onClick={() =>
                            this.addToCart(this.state.item.product_id)
                            } className='btn-pp'>Add To Cart</button>
                        </Link>
                        {info}
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {

        var cart = JSON.parse(localStorage.getItem('my-cart'));
        cart = cart || [];
        this.setState({cart});
    }
}

export default ProductPage