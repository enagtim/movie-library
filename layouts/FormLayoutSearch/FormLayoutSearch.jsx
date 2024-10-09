import styles from "./FormLayoutSearch.module.css";
import Button from "../../components/Button/Button";
import InputSearch from "../../components/InputSearch/InputSearch";
function FormLayoutSearch() {
  const formSumbit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };
  return (
    <>
      <form className={styles["form"]} onSubmit={formSumbit}>
        <InputSearch />
        <Button text="Search" />
      </form>
    </>
  );
}
export default FormLayoutSearch;
