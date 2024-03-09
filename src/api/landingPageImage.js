import axios from "../config/axios";

export const fetchLanding = () => axios.get("/landing");
export const createLanding = (formData, productId) => axios.post(`/landing/upload/${productId}`, formData);
export const deleteLanding = (landingId) => axios.delete(`/landing/delete/${landingId}`);