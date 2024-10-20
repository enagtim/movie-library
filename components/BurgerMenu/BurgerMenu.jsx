import styles from "./BurgerMenu.module.css";

function BurgerMenu() {
  return (
    <button className={styles["burger"]}>
      <div className={styles["burger__wrapper"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </button>
  );
}

export default BurgerMenu;
