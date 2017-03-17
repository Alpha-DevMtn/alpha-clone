import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { getProduct } from './../services/productsService';

class ProductPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: {},
            cart: []
        }

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(id) {
        var cart = this.state.cart;
        cart.push(id);
        this.setState({cart});
        localStorage.setItem('my-cart', JSON.stringify(cart));
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.state.item.imageurl} />
                </div>
                <div>
                    <h1>{this.state.item.prod_name} - {this.state.item.color}</h1>
                </div>
                <Link to={"/cart"}>
                    <button onClick={() =>
                        this.addToCart(this.state.item.product_id)
                    }>Add To Cart</button>
                </Link>
            </div>
        )
    }

    componentDidMount() {
        getProduct(this.props.params.product_id).then(item => {
            this.setState({item})
        })

        var cart = JSON.parse(localStorage.getItem('my-cart'));
        cart = cart || [];
        this.setState({cart});
    }
}

export default ProductPage