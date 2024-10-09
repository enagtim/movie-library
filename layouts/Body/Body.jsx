import CardList from "../CardList/CardList";
import FormLayoutSearch from "../FormLayoutSearch/FormLayoutSearch";
import TitleTextLayout from "../TitleTextLayout/TitleTextLayout";
import styles from "./Body.module.css";

function Body() {
  return (
    <div className={styles["body"]}>
      <div className={styles["content"]}>
        <TitleTextLayout />
        <FormLayoutSearch />
        <CardList />
      </div>
    </div>
  );
}

export default Body;
