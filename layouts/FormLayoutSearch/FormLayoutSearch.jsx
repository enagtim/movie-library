import styles from "./FormLayoutSearch.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
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
