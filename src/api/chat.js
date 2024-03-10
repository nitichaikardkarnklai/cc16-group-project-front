import axios from '../config/axios';

export const getUserChatHistory = () => axios.get('/live-chat/get');
export const getAdminChatHistory = (userId) => axios.get(`/live-chat/get-chat-admin/${userId}`);
