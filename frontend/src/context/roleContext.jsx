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

  const deleteRol = async ({ id }) => {
    try {
      const res = await api.delete(`/role/${id}`);
      if (res.status === 204) {
        setRole(role.filter((item) => item.id !== id));
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      }
    }
  };

  const updateRol = async (id, data) => {
    try {
      const res = await api.put(`/role/${id}`, data);
      return res.data;
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      }
    }
  };

  const getByIdRol = async (id) => {
    const res = await api.get(`/role/${id}`);
    console.log(res.data);
    return res.data;
  };

  return (
    <RoleContext.Provider
      value={{
        getRole,
        createRole,
        deleteRol,
        updateRol,
        getByIdRol,
        role,
        error,
      }}
    >
      {props.children}
    </RoleContext.Provider>
  );
}

export default RoleProvider;
