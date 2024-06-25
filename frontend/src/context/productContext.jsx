import { createContext, useState } from "react";
import { api } from "../libs/axios";
import { crearProducts } from "../api/products.js";

export const ProductContext = createContext();

export function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <ProductContext.Provider
      value={{
        createProduct,
        getProducts,
        products,
        filter,
        filteredProducts,
        error,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
