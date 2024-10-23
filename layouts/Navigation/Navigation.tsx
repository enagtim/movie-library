import LoginText from "../../components/LoginText/LoginText";
import MyFilm from "../../components/MyFilm/MyFilm";
import SearchFilm from "../../components/SearchFilm/SearchFilm";
import styles from "./Navigation.module.css";
import UserName from "../../components/UserName/UserName";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import { UserContext } from "../../src/сontext/user.context";
import { useContext } from "react";

function Navigation() {
  const { username, isLogin, logout } = useContext(UserContext);
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
