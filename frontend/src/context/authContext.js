import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => setIsAuth(true);

  return (
    <AuthContext.Provider value={{ isAuth, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
