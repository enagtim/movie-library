import InFavorites from "../../components/InFavorites/InFavorites";
import NameFilm from "../../components/NameFilm/NameFilm";
import "./NameFilmLayout.css";

function NameFilmLayout({ name }) {
  return (
    <div className="name_layout">
      <NameFilm name={name} />
      <InFavorites text="Add to favourites" />
    </div>
  );
}

export default NameFilmLayout;
