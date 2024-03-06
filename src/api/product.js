import axios from '../config/axios';

export const addProduct = (formData) => axios.post("product/create", formData);
export const fetchAllProduct = () => axios.get('/product');
export const fetchProductById = (productId) =>
  axios.get(`/product/${productId}`);
