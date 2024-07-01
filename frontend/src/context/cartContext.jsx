import { createContext, useState, useEffect } from "react";
import { api } from "../libs/axios";

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(() => {
    // Obtener el contador de localStorage al inicializar
    const savedCount = localStorage.getItem("count");
    return savedCount ? JSON.parse(savedCount) : 0;
  });
  const [cart, setCart] = useState(() => {
    // Obtener el carrito de localStorage al inicializar
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [order, SetOrder] = useState([]);

  useEffect(() => {
    // Guardar el carrito en localStorage cuando cambie
    localStorage.setItem("count", JSON.stringify(count));
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, count]);

  const addToCart = (product) => {
    if (cart.find((item) => item._id === product._id)) {
      const countProduct = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCount(count + (product.quantity || 1));
      return setCart(countProduct);
    }
    const newProduct = { ...product, quantity: 1 };
    setCount(count + (product.quantity || 1));
    setCart([...cart, newProduct]);
  };

  const handleRemoveFromCart = (id) => {
    const newCart = cart
      .map((item) => {
        if (item._id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          // If quantity is 1, return null to filter out the item later
          return null;
        }
        return item;
      })
      .filter((item) => item !== null); // Remove items that are null

    setCart(newCart);
    const removedItem = cart.find((item) => item._id === id);
    if (removedItem) {
      setCount(count - 1);
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const createOrder = async (data) => {
    try {
      const newOrder = await api.post("/items", data);
      setCart([]);
      setCount(0);
      return newOrder.data;
    } catch (error) {
      if (error.response) {
        console.log("context error", error.response);
        return { error: error.response.data }; // Devuelve un objeto de error
      } else {
        console.log("Unexpected error", error);
        return { error: "Unexpected error occurred" }; // Devuelve un mensaje de error genérico
      }
    }
  };

  const getOrder = async () => {
    try {
      const res = await api.get("/order");
      SetOrder(res.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        count,
        cart,
        order,
        handleRemoveFromCart,
        createOrder,
        addToCart,
        getTotal,
        getOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
