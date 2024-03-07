import axios from '../config/axios';

export const addProduct = (formData) => axios.post("product/create", formData);
export const fetchAllProduct = () => axios.get('/product');
export const fetchProductById = (productId) =>
  axios.get(`/product/${productId}`);

export const updateProductDetails = (data, productId) => axios.patch(`product/update/${productId}`, data);
export const updateCoverImage = (formData, coverId) => axios.post(`product/update_cover/${coverId}`, formData);