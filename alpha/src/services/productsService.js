import axios from 'axios';

export function getProducts() {
    return axios.get('/api/products')
    .then(res => res.data)
}

export function getProduct(product_id) {
    return axios.get(`/api/products/${product_id}`)
    .then(res => res.data)
}

export function getMensProducts() {
    return axios.get('/api/products/gender/men')
    .then(res => res.data)
}

export function getWomensProducts() {
    return axios.get('/api/products/gender/women')
    .then(res => res.data)
}