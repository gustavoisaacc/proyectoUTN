import { createContext, useState } from "react";
import { api } from "../libs/axios";

export const RoleContext = createContext();

function RoleProvider(props) {
  const [role, setRole] = useState([]);
  const [error, setError] = useState(null);

  const getRole = async () => {
    try {
      const res = await api.get("/role");
      setRole(res.data);
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      }
    }
  };
  const createRole = async (data) => {
    try {
      const res = await api.post("/role", data);
      setRole([...role, res.data]);
      return res.data;
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      }
    }
  };

  return (
    <RoleContext.Provider value={{ getRole, createRole, role, error }}>
      {props.children}
    </RoleContext.Provider>
  );
}

export default RoleProvider;
