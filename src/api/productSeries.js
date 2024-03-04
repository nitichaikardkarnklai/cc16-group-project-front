import axios from "../config/axios";

export const fetchSeries = () => axios.get("/product/series", user);
export const createSeries = () => axios.post("/product/series/create", user);
export const editSeries = (id) => axios.patch(`/product/series/${id}`, user);