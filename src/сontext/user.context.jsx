import { createContext } from "react";
import { useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [username, setUserName] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("profiles"));
    if (Array.isArray(data)) {
      setProfiles(data);
      const loggedUser = data.find((profile) => profile.isLogin);
      if (loggedUser) {
        setUserName(loggedUser.name);
        setIsLogin(true);
      }
    } else {
      setProfiles([]);
    }
  }, []);

  const login = (name) => {
    const data = JSON.parse(localStorage.getItem("profiles")) || [];
    const existingProfile = data.find((profile) => profile.name === name);

    if (existingProfile) {
      existingProfile.isLogin = true;
    } else {
      data.push({ name, isLogin: true });
    }
    localStorage.setItem("profiles", JSON.stringify(data));
    setUserName(name);
    setIsLogin(true);
  };

  const logout = () => {
    const data = JSON.parse(localStorage.getItem("profiles")) || [];
    const updateProfile = data.map((profile) => {
      if (profile.name === username) {
        return { ...profile, isLogin: false };
      }
      return profile;
    });
    localStorage.setItem("profiles", JSON.stringify(updateProfile));
    setIsLogin(false);
  };
  return (
    <UserContext.Provider
      value={{ profiles, username, isLogin, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
