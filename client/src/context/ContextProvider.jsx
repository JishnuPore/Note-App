import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }
        const res = await axios.get("http://localhost:5000/api/auth/verify", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.success) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.log(err);
      }
    };
    verifyUser();
  }, []);

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
};
export const useAuth = () => useContext(authContext);
export default ContextProvider;
