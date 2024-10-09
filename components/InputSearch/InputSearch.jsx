import styles from "./InputSearch.module.css";

function InputSearch() {
  return (
    <div className={styles["wrapper_input"]}>
      <img src="/Search.svg" alt="Иконка поиска" />
      <input
        className={styles["search_input"]}
        type="text"
        name="search_input"
        placeholder="Please enter film name"
        autoComplete="off"
      />
    </div>
  );
}

export default InputSearch;
