import NameFilmLayout from "../../layouts/NameFilmLayout/NameFilmLayout";
import Poster from "../Poster/Poster";
import RatingButton from "../RatingButton/RatingButton";
import "./CardFilm.css";

function CardFilm({ rating, poster, name }) {
  return (
    <div className="card_film">
      <RatingButton text={rating} />
      <Poster src={poster} />
      <NameFilmLayout name={name} />
    </div>
  );
}

export default CardFilm;
