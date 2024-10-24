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
          placeholder="Введите название"
          autoComplete="off"
        />
        <Button text="Искать" />
      </form>
    </>
  );
}
export default FormLayoutSearch;
