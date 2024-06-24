import { api } from "../libs/axios";

export const crearProducts = (data) => api.post("/product", data);
