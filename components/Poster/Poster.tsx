import styles from "./Poster.module.css";

function Poster({ src }) {
  return <img className={styles["poster"]} src={src} alt="Постер фильма" />;
}

export default Poster;
