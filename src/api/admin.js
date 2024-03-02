import axios from '../config/axios';

export const getUsers = () => axios.get('/admin/allUser'); // get all customer
export const getAdmins = () => axios.get('/admin/allAdmin'); // get all admin
export const bannedUser = (userId) => axios.patch(`admin/${userId}/banned/user`);
export const unbannedUser = (userId) => axios.patch(`admin/${userId}/unbanned/user`);
export const bannedAdmin = (userId) => axios.patch(`admin/${userId}/banned/admin`);
export const unbannedAdmin = (userId) => axios.patch(`admin/${userId}/unbanned/admin`);