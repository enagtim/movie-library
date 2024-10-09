import CardFilm from "../../components/CardFilm/CardFilm";
import styles from "./CardList.module.css";
const dataFilm = [
  {
    id: 1,
    title: "Black Widow",
    rating: 324,
    poster: "./public/BlackWidow.png",
  },
  {
    id: 2,
    title: "Shang Chi",
    rating: 124,
    poster: "./public/ShangChi.png",
  },
  {
    id: 3,
    title: "Loki",
    rating: 235,
    poster: "./public/Loki.png",
  },
  {
    id: 4,
    title: "How I Met Your Mother ",
    rating: 123,
    poster: "./public/HowIMetYourMother.png",
  },
  {
    id: 5,
    title: "Money Heist",
    rating: 8125,
    poster: "./public/MoneyHeist.png",
  },
  {
    id: 6,
    title: "Friends",
    rating: 123,
    poster: "./public/Friends.png",
  },
  {
    id: 7,
    title: "The Big Bang Theory",
    rating: 12,
    poster: "./public/TheBigBoneTheory.png",
  },
  {
    id: 8,
    title: "Two And a Half Men",
    rating: 456,
    poster: "./public/TwoAndaHalfMen.png",
  },
];
function CardList() {
  return (
    <div className={styles["card_list"]}>
      <CardFilm
        name={dataFilm[0].title}
        poster={dataFilm[0].poster}
        rating={dataFilm[0].rating}
      />
      <CardFilm
        name={dataFilm[1].title}
        poster={dataFilm[1].poster}
        rating={dataFilm[1].rating}
      />
      <CardFilm
        name={dataFilm[2].title}
        poster={dataFilm[2].poster}
        rating={dataFilm[2].rating}
      />
      <CardFilm
        name={dataFilm[3].title}
        poster={dataFilm[3].poster}
        rating={dataFilm[3].rating}
      />
      <CardFilm
        name={dataFilm[4].title}
        poster={dataFilm[4].poster}
        rating={dataFilm[4].rating}
      />
      <CardFilm
        name={dataFilm[5].title}
        poster={dataFilm[5].poster}
        rating={dataFilm[5].rating}
      />
      <CardFilm
        name={dataFilm[6].title}
        poster={dataFilm[6].poster}
        rating={dataFilm[6].rating}
      />
      <CardFilm
        name={dataFilm[7].title}
        poster={dataFilm[7].poster}
        rating={dataFilm[7].rating}
      />
    </div>
  );
}
export default CardList;
