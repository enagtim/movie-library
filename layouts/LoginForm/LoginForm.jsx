import Title from "../../components/Title/Title";
import styles from "./LoginForm.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { UserContext } from "../../src/сontext/user.context";
import { useContext } from "react";

function LoginForm() {
  const { login } = useContext(UserContext);
  const formSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    login(name);
  };
  return (
    <form className={styles["form"]} onSubmit={formSubmit}>
      <Title title="Log in" />
      <Input
        IconLeft={true}
        IconRight={true}
        type="text"
        name="name"
        placeholder="Enter your name"
        autoComplete="off"
      />
      <Button onClick={login} text="Log in profile" />
    </form>
  );
}
export default LoginForm;
