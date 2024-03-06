import axios from "../config/axios";

export const fetchAllProduct = () => axios.get("/product");
export const addProduct = (formData) => axios.post("product/create", formData);