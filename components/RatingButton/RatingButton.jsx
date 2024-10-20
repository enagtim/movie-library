import styles from "./RatingButton.module.css";

function RatingButton({ text }) {
  return (
    <button className={styles["rating-button"]}>
      <img src="/star.svg" alt="Иконка рейтинга" />
      <div className={styles["raiting-button__text"]}>{text}</div>
    </button>
  );
}

export default RatingButton;
