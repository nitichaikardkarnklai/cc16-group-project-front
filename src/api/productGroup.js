import axios from "../config/axios";

export const fetchGroup = () => axios.get("/product/group_product");
export const createGroup = (group) => axios.post("/product/group_product/create", group);
export const editGroup = (id, group) => axios.patch(`/product/group_product/${id}`, group); // categories only