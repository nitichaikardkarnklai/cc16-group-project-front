import axios from '../config/axios';

export const getUserProfile = () => axios.get('/user/profile');
export const editUserProfile = (data) => axios.patch('/user/profile', data);

export const createAddress = (data) => axios.post('/user/address', data);
export const getUserAddress = () => axios.get('/user/address/all');
export const deleteUserAddress = (addressId) =>
  axios.delete(`/user/address/${addressId}`);
