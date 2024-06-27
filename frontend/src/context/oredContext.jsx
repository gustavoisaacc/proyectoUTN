import { createContext, useState } from "react";
import { api } from "../libs/axios";

export const OrdertContext = createContext();

export function OrderProvider(props) {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  const getOrder = async () => {
    try {
      const res = await api.get("/order");
      setOrders(res.data);
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      }
    }
  };

  return (
    <OrdertContext.Provider
      value={{
        orders,
        getOrder,
        error,
      }}
    >
      {props.children}
    </OrdertContext.Provider>
  );
}
