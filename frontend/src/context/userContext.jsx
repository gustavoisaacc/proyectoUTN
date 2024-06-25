import { createContext, useState } from "react";
import { api } from "../libs/axios";

export const UserContext = createContext();

function UserProvider(props) {
  const [users, setUsers] = useState(null);
  const [errors, setErrors] = useState(null);

  const getUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data);
      }
    }
  };
  const createUsers = async (data) => {
    console.log("context data", data);
    try {
      const res = await api.post("/users", data);
      setUsers([...users, res.data]);
      return res.data;
    } catch (error) {
      if (error.response) {
        console.log("context error", error.response);
        setErrors(error.response.data);
      }
    }
  };

  const deleteUser = async ({ id }) => {

    try {
      const res = await api.delete(`/users/${id}`);
      if (res.status === 204) {
        setUsers(users.filter((item) => item.id !== id));
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data)
      }
    }
  }

  const updateUser = async (id, data) => {

    try {
      const res = await api.put(`/users/${id}`, data);
      return res.data
    } catch (error) {
      if (error.response) {
        setError(error.response.data)
      }
    }
  }

  const getByIdUser = async (id) => {
    console.log(id)
    const res = await api.get(`/users/${id}`);
    return res.data
  }


  return (
    <UserContext.Provider value={{ getUsers, getByIdUser, createUsers, deleteUser, updateUser, users, errors }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
