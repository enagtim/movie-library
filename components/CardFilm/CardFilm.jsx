import NameFilmLayout from "../../layouts/NameFilmLayout/NameFilmLayout";
import Poster from "../Poster/Poster";
import RatingButton from "../RatingButton/RatingButton";
import styles from "./CardFilm.module.css";

function CardFilm({ rating, poster, name }) {
  return (
    <div className={styles["card_film"]}>
      <RatingButton text={rating} />
      <Poster src={poster} />
      <NameFilmLayout name={name} />
    </div>
  );
}

export default CardFilm;
