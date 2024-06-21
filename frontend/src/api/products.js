import { isAxiosError } from "axios";
import { api } from "../libs/axios";

export const crearProduct = async (product) => {
  try {
    const data = await api.post("/product", product);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
};
