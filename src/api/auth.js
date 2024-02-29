import axios from "../config/axios";

export const register = user => axios.post("/user/register", user);
export const login = credential => axios.post("/user/login", credential);
export const fetchMe = () => axios.get("/user");