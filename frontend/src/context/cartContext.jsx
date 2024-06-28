import { createContext, useState, useEffect } from "react";

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
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <CartContext.Provider
      value={{ handleRemoveFromCart, cart, addToCart, count, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
