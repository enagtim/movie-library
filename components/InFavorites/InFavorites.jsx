import styles from "./InFavorites.module.css";

function InFavorites({ text }) {
  return (
    <div className={styles["in_favorite"]}>
      <img src="/like.svg" alt="Иконка лайка" />
      <div className={styles["text"]}>{text}</div>
    </div>
  );
}

export default InFavorites;
