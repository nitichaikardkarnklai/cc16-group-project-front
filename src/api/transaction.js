import axios from '../config/axios';

//user
export const createTransaction = (data) => axios.post('/transaction', data);
export const updateTransaction = (data) => axios.patch('/transaction', data);
export const getUserTransaction = () => axios.get('/transaction');

//admin see all transaction
