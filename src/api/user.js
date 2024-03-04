import axios from '../config/axios';

export const getUserProfile = () => axios.get('/user/profile');
export const editUserProfile = (data) => axios.patch('/user/profile', data);
