import CardList from "../CardList/CardList";
import FormLayoutSearch from "../FormLayoutSearch/FormLayoutSearch";
import TitleTextLayout from "../TitleTextLayout/TitleTextLayout";
import "./Body.css";

function Body() {
  return (
    <div className="body">
      <div className="content">
        <TitleTextLayout />
        <FormLayoutSearch />
        <CardList />
      </div>
    </div>
  );
}

export default Body;
