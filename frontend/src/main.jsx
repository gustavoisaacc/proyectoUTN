import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/authContext.jsx";
import { ProductProvider } from "./context/productContext.jsx";
import CategoryProvider from "./context/categoryContext.jsx";
import UserProvider from "./context/userContext.jsx";
import RoleProvider from "./context/roleContext.jsx";
import { OrderProvider } from "./context/oredContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <CategoryProvider>
            <UserProvider>
              <RoleProvider>
                <OrderProvider>
                  <CartProvider>
                    <App />
                  </CartProvider>
                </OrderProvider>
              </RoleProvider>
            </UserProvider>
          </CategoryProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
