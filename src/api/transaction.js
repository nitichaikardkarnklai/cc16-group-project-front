import axios from '../config/axios';

export const createTransaction = (data) => axios.post('/transaction', data);
export const updateTransaction = (data) => axios.patch('/transaction', data);
