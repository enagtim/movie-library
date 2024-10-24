import styles from "./InFavorites.module.css";
import InFavorite from './InFavorites.props';

function InFavorites({ text } : InFavorite) {
  return (
    <div className={styles["in_favorite"]}>
      <img src="/like.svg" alt="Иконка лайка" />
      <div className={styles["text"]}>{text}</div>
    </div>
  );
}

export default InFavorites;
