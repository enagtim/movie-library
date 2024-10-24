import InFavorites from "../../components/InFavorites/InFavorites";
import NameFilm from "../../components/NameFilm/NameFilm";
import styles from "./NameFilmLayout.module.css";
import FilmLayoutProps from './FilmLauout.props';

function NameFilmLayout({ title }: FilmLayoutProps) {
  return (
    <div className={styles["name_layout"]}>
      <NameFilm name={title} />
      <InFavorites text="Add to favourites" />
    </div>
  );
}

export default NameFilmLayout;
