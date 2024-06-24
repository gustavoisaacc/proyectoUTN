import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/authContext.jsx";
import { ProductProvider } from "./context/productContext.jsx";
import CategoryProvider from "./context/categoryContext.jsx";
import UserProvider from "./context/userContext.jsx";
import RoleProvider from "./context/roleContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <CategoryProvider>
            <UserProvider>
              <RoleProvider>
                <App />
              </RoleProvider>
            </UserProvider>
          </CategoryProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
