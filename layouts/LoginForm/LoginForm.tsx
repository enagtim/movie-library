import Title from "../../components/Title/Title";
import styles from "./LoginForm.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { UserContext } from "../../src/сontext/user.context";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { UserContextValue } from "../../src/сontext/user.context.props";

function LoginForm() {
  const context = useContext(UserContext);
  if(!context){
    throw new Error("UserContext must be used within a UserContextProvider");
  }
  const { login } = context as UserContextValue;
  const [inputValue, setInputValue] = useState<string>("");

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(inputValue);
    setInputValue("");
  };
  return (
    <form className={styles["form"]} onSubmit={formSubmit}>
      <Title title="Log in" />
      <Input
        IconLeft={true}
        IconRight={true}
        type="text"
        name="name"
        value={inputValue}
        onChange={changeInput}
        placeholder="Enter your name"
        autoComplete="off"
      />
      <Button onClick={() => login(inputValue)} text="Log in profile" />
    </form>
  );
}
export default LoginForm;
