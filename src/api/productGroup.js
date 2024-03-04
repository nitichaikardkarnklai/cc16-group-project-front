import axios from "../config/axios";

export const fetchGroup = () => axios.get("/product/group");
export const createGroup = (group) => axios.post("/product/group/create", group);
export const editGroup = (id, group) => axios.patch(`/product/group/${id}`, group); // categories only