import Title from "../../components/Title/Title";
import styles from "./LoginForm.module.css";
function LoginForm() {
  return (
    <form className={styles["login_form"]}>
      <Title title="Log in" />;
    </form>
  );
}
export default LoginForm;
