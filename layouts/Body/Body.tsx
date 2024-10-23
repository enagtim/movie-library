import CardList from "../CardList/CardList";
import FormLayoutSearch from "../FormLayoutSearch/FormLayoutSearch";
import LoginForm from "../LoginForm/LoginForm";
import TitleTextLayout from "../TitleTextLayout/TitleTextLayout";
import styles from "./Body.module.css";

function Body() {
  return (
    <div className={styles["body"]}>
      <div className={styles["content"]}>
        <LoginForm />
        <TitleTextLayout />
        <FormLayoutSearch />
        <CardList />
      </div>
    </div>
  );
}

export default Body;
