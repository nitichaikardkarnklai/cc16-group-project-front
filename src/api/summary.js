import axios from '../config/axios';

export const summary = () => axios.get('/summary');
