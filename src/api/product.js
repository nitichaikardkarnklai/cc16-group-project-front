import axios from "../config/axios";

export const fetchAllProduct = () => axios.get("/product");