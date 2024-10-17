import { createContext } from "react";
import { useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [username, setUserName] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("profiles"));
    if (data) {
      setUserName(data.name);
      setIsLogin(data.isLogin);
    }
  }, []);

  const login = (name) => {
    setUserName(name);
    setIsLogin(true);
    const user = {
      name: name,
      isLogin: true,
    };
    localStorage.setItem("profiles", JSON.stringify(user));
  };

  const logout = () => {
    setUserName("");
    setIsLogin(false);
    localStorage.removeItem("profiles");
  };
  return (
    <UserContext.Provider value={{ username, isLogin, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
