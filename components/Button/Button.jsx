import styles from "./Button.module.css";

function Button({ text }) {
  const clickedButton = (event) => {
    console.log(event);
  };
  return (
    <>
      <button onClick={clickedButton} className={styles["button"]}>
        {text}
      </button>
    </>
  );
}

export default Button;
