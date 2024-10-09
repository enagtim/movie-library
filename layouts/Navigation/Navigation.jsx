import LoginText from "../../components/LoginText/LoginText";
import MyFilm from "../../components/MyFilm/MyFilm";
import SearchFilm from "../../components/SearchFilm/SearchFilm";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles["navigation"]}>
      <SearchFilm />
      <MyFilm />
      <LoginText />
    </nav>
  );
}

export default Navigation;
