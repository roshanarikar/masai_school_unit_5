import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const toggleAuth = (check) => {
    console.log(check);
    if (check) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  };
  const logout = (check) => {
    if (check) {
      setAuth(false);
      console.log("Logged out");
    }
  };
  return (
    <AuthContext.Provider value={{ auth, toggleAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
