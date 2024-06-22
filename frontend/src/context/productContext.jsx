import { createContext, useEffect, useState } from "react";
import { api } from "../libs/axios";

export const ProductContext = createContext();

export function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api
      .get("/product")
      .then((products) => {
        setProducts(products.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(products);
  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {props.children}
    </ProductContext.Provider>
  );
}
