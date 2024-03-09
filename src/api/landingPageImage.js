import axios from "../config/axios";

export const fetchLanding = () => axios.get("/landing");
export const createLanding = (formData) => axios.post("/landing/upload", formData);
export const deleteLanding = (formData, landingId) => axios.patch(`/landing/delete/${landingId}`, formData);