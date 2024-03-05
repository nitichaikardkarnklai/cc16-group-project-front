import axios from "../config/axios";

export const fetchSeries = () => axios.get("/product/series");
export const createSeries = (series) => axios.post("/product/series/create", series);
export const editSeries = (id, series) => axios.patch(`/product/series/${id}`, series);