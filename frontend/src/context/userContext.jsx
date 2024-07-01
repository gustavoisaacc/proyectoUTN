import { createContext, useState } from "react";
import { api } from "../libs/axios";

export const UserContext = createContext();

function UserProvider(props) {
  const [users, setUsers] = useState(null);
  const [errors, setErrors] = useState(null);

  const getUsers = async () => {
    try {
      const res = await api.get("/users");
      setErrors(null);
      setUsers(res.data);
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data);
      }
    }
  };
  const createUsers = async (data) => {
    try {
      const res = await api.post("/users", data);

      // Manejo de respuestas HTTP que no son exitosas
      if (res.status !== 201) {
        console.log("User creation failed with status:", res.status);
        return null; // Devuelve null o un objeto de error
      }

      setUsers((prevUsers) => [...prevUsers, res.data]);
      return res.data; // Devuelve los datos del usuario creado
    } catch (error) {
      if (error.response) {
        console.log("context error", error.response);
        setErrors(error.response.data);
        return { error: error.response.data }; // Devuelve un objeto de error
      } else {
        console.log("Unexpected error", error);
        return { error: "Unexpected error occurred" }; // Devuelve un mensaje de error genérico
      }
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await api.delete(`/users/${id}`);

      if (res.status === 204) {
        setUsers(users.filter((item) => item.id !== id));
        setErrors(null);
      }
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data);
      }
    }
  };

  const updateUser = async (id, data) => {
    try {
      const res = await api.put(`/users/${id}`, data);
      if (res.status !== 201) {
        console.log("User creation failed with status:", res.status);
        return null; // Devuelve null o un objeto de error
      }
      return res.data;
    } catch (error) {
      if (error.response) {
        console.log("context error", error.response);
        setErrors(error.response.data);
        return { error: error.response.data }; // Devuelve un objeto de error
      } else {
        console.log("Unexpected error", error);
        return { error: "Unexpected error occurred" }; // Devuelve un mensaje de error genérico
      }
    }
  };

  const getByIdUser = async (id) => {
    const res = await api.get(`/users/${id}`);
    setErrors(null);
    return res.data;
  };

  return (
    <UserContext.Provider
      value={{
        getUsers,
        getByIdUser,
        createUsers,
        deleteUser,
        updateUser,
        users,
        errors,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
