import { createContext, useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { api } from "../libs/axios";
import Cookie from "js-cookie";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signin = async (data) => {
    try {
      const res = await api.post("/signin", data);
      setUser(res);
      setIsAuth(true);
      Cookie.set("token", res.data.token);
      return res.data;
    } catch (error) {
      if (isAxiosError(error) && error.response.data) {
        return setError(error.response.data);
      }
    }
  };

  const signout = async () => {
    await api.post("/signout");
    setIsAuth(false);
    setUser(null);
  };

  useEffect(() => {
    const clean = setTimeout(() => {
      setError(null);
    }, 5000);

    return () => clearTimeout(clean);
  }, [error]);

  return (
    <AuthContext.Provider value={{ user, error, isAuth, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
