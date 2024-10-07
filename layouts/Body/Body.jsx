import CardFilm from "../../components/CardFilm/CardFilm";
import FormLayoutSearch from "../FormLayoutSearch/FormLayoutSearch";
import TitleTextLayout from "../TitleTextLayout/TitleTextLayout";
import "./Body.css";

function Body() {
  return (
    <div className="body">
      <div className="content">
        <TitleTextLayout />
        <FormLayoutSearch />
        <CardFilm />
      </div>
    </div>
  );
}

export default Body;
