import styles from "./NameFilm.module.css";

function NameFilm({ name }) {
  return <div className={styles["name_film"]}>{name}</div>;
}

export default NameFilm;
