import { useContext } from "react";
import { AuthContext } from "./authContext";
import { ProductContext } from "./productContext";
import { categoryContext } from "./categoryContext";
import { UserContext } from "./userContext";
import { RoleContext } from "./roleContext";

export const useAuth = () => useContext(AuthContext);
export const useProduct = () => useContext(ProductContext);
export const useCategory = () => useContext(categoryContext);
export const useUsers = () => useContext(UserContext);
export const useRole = () => useContext(RoleContext);
