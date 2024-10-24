import styles from "./FormLayoutSearch.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
function FormLayoutSearch() {
  return (
    <>
      <form className={styles["form"]}>
        <Input
          IconLeft={false}
          IconRight={true}
          type="text"
          name="search_input"
          placeholder="Please enter film name"
          autoComplete="off"
        />
        <Button text="Search" />
      </form>
    </>
  );
}
export default FormLayoutSearch;
