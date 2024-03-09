import axios from "../config/axios";

export const fetchAllProduct = () => axios.get("/product");
export const fetchShowProductBySeries = (id) => axios.get(`/show-product/bySeries/${id}`);
export const fetchShowProductByType = () => axios.get(`/show-product/byGroup/TYPE`);
export const fetchShowProductMega = () => axios.get(`/show-product/byCategories/1`);
