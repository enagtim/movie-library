import styles from "./MyFilm.module.css";

function MyFilm() {
  return (
    <a href="#" className={styles["my_film"]}>
      My films
      <img src="/Ellipse.svg" alt="Икона фильмов" />
    </a>
  );
}
export default MyFilm;
