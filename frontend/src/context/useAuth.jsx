import { useContext } from "react";
import { AuthContext } from "./authContext";
import { ProductContext } from "./productContext";

export const useAuth = () => useContext(AuthContext);
export const useProduct = () => useContext(ProductContext);
