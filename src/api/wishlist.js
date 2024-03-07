import axios from '../config/axios';

export const createWishlist = (productId) =>
  axios.post(`/watch/create/${productId}`);
export const deleteWishlist = (wishlistId) =>
  axios.post(`/watch/delete/${wishlistId}`);
export const getWishlist = () => axios.get(`/watch/`);
