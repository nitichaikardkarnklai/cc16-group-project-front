import axios from '../config/axios';

export const getUserProfile = () => axios.get('/user/profile');
export const editUserProfile = (data) => axios.patch('/user/profile', data);

//Address
export const createAddress = (data) => axios.post('/user/address', data);
export const getUserAddress = () => axios.get('/user/address/all');
export const deleteUserAddress = (addressId) =>
  axios.delete(`/user/address/${addressId}`);
export const editUserAddress = (addressId, data) =>
  axios.patch(`/user/address/${addressId}`, data);

//Subscribe
export const userSubscribe = (data) => axios.patch('/user/subscribe', data);
export const getSubscribe = () => axios.get('/user/subscribe');

//reward
export const getReward = () => axios.get('/reward');
