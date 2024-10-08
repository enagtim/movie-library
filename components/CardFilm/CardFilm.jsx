import NameFilmLayout from "../../layouts/NameFilmLayout/NameFilmLayout";
import Poster from "../Poster/Poster";
import RatingButton from "../RatingButton/RatingButton";
import "./CardFilm.css";

function CardFilm() {
  return (
    <div className="card_film">
      <RatingButton text="124" />
      <Poster src="./public/BlackWidow.png" />
      <NameFilmLayout />
    </div>
  );
}

export default CardFilm;
