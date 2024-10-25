import LoginText from "../../components/LoginText/LoginText";
import MyFilm from "../../components/MyFilm/MyFilm";
import SearchFilm from "../../components/SearchFilm/SearchFilm";
import styles from "./Navigation.module.css";
import UserName from "../../components/UserName/UserName";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import { UserContext } from "../../сontext/user.context";
import { useContext } from "react";
import { UserContextValue } from "../../сontext/user.context.props";

function Navigation() {
  const context = useContext(UserContext);
  if(!context){
    throw new Error("UserContext must be used within a UserContextProvider");
  }
  const { username, isLogin, logout } = context as UserContextValue;
  return (
    <nav className={styles["navigation"]}>
      {isLogin ? (
        <>
          <SearchFilm />
          <MyFilm />
          <UserName username={username} />
          <LogoutButton onClick={logout} />
        </>
      ) : (
        <>
          <SearchFilm />
          <MyFilm />
          <LoginText />
        </>
      )}
    </nav>
  );
}

export default Navigation;
