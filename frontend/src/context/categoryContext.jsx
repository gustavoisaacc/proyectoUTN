import { createContext, useState } from "react";
import { api } from "../libs/axios";

export const categoryContext = createContext();

function CategoryProvider(props) {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const getCategories = async () => {
    try {
      const res = await api.get("/category");
      setCategories(res.data);
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      }
    }
  };

  const crearCategory = async (data) => {
    try {
      const res = await api.post("/category", data);
      setCategories([...categories, res.data]);
      return res.data;
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      }
    }
  };

  return (
    <categoryContext.Provider
      value={{ crearCategory, getCategories, categories, error }}
    >
      {props.children}
    </categoryContext.Provider>
  );
}

export default CategoryProvider;
