import axios from '../config/axios';

export const fetchAllProduct = () => axios.get('/product');
export const fetchProductById = (productId) =>
  axios.get(`/product/${productId}`);
