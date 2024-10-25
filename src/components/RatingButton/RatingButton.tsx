import styles from "./RatingButton.module.css";
import RatingProps from './RatingButton.props';
function RatingButton({numberRating}: RatingProps) {
  return (
    <button className={styles["rating-button"]}>
      <img src="/star.svg" alt="Иконка рейтинга" />
      <div className={styles["raiting-button__text"]}>{numberRating}</div>
    </button>
  );
}

export default RatingButton;
