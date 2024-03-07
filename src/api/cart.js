import axios from '../config/axios';

export const upsertIntoCart = (data) => axios.patch('/cart', data);
export const removeFromCart = (itemId) => axios.delete(`/cart/${itemId}`);
export const seeItemInCart = () => axios.get('/cart');
