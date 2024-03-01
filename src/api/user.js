import axios from '../config/axios';

export const getUserProfile = () => axios.get('/user/profile');
