import styles from "./LoginText.module.css";

function LoginText() {
  return (
    <a href="#" className={styles["login_text"]}>
      Log in
      <img src="/Login.svg" alt="Иконка входа" />
    </a>
  );
}

export default LoginText;
