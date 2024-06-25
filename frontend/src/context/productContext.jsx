import { createContext, useState } from "react";
import { api } from "../libs/axios";
import { crearProducts } from "../api/products.js";

export const ProductContext = createContext();

export function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState(null)

  const getProducts = async () => {
    try {
      const res = await api.get("/product");
      setProducts(res.data);
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      }
    }
  };

  const createProduct = async (data) => {
    try {
      const res = await crearProducts(data);
      setProducts([...products, res.data]);
      return res.data;
    } catch (error) {
      if (error.response) {
        setError(error.response);
      }
    }
  };

  const filteredProducts = async (filter) => {
    try {
      const res = await api.get(`/product/filter?product=${filter}`);
      setError(null);
      setFilter(res.data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      }
    }
  };

  const deleteProduct = async ({id}) => {
   
    try {
      const res = await api.delete(`/product/${id}`);
    if (res.status === 204) {
      setProducts(products.filter((item) => item.id !== id));
    }
    } catch (error) {
      if(error.response){
        setError(error.response.data)
      }
    }
  }

  const updateProduct = async (id, data) => {
   
    try {
      const res = await api.put(`/product/${id}`, data);
      return res.data
    } catch (error) {
      if(error.response){
        setError(error.response.data)
      }
    }
  }

  const getByIdProduct = async ({ id }) => {
    const res = await api.get(`/product/${id}`);
    return res.data
  }

  return (
    <ProductContext.Provider
      value={{
        createProduct,
        getProducts,
        getByIdProduct,
        products,
        filter,
        filteredProducts,
        deleteProduct,
        updateProduct,
        msg,
        error,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
