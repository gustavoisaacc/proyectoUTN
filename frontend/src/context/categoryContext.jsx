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
  
  const deleteCategory = async ({id}) => {
   
    try {
      const res = await api.delete(`/category/${id}`);
    if (res.status === 204) {
      setCategories(categories.filter((item) => item.id !== id));
    }
    } catch (error) {
      if(error.response){
        setError(error.response.data)
      }
    }
  }

  const updateCategory = async (id, data) => {
   
    try {
      const res = await api.put(`/category/${id}`, data);
      return res.data
    } catch (error) {
      if(error.response){
        setError(error.response.data)
      }
    }
  }

  return (
    <categoryContext.Provider
      value={{ crearCategory, getCategories, deleteCategory, updateCategory, categories, error }}
    >
      {props.children}
    </categoryContext.Provider>
  );
}

export default CategoryProvider;
