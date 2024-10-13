import Title from "../../components/Title/Title";
import styles from "./LoginForm.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";

function LoginForm() {
  const [user, setUser] = useState("");
  const [isLogginedIn, setIsLoggedIn] = useState(false);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const savedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    setProfiles(savedProfiles);
  }, []);

  useEffect(() => {
    if (profiles.length > 0) {
      localStorage.setItem("profiles", JSON.stringify(profiles));
    }
  }, [profiles]);

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleLogin = () => {
    if (user) {
      const newUser = {
        name: user,
        isLoggined: true,
      };
      setProfiles((prevProfiles) => {
        const updatedProfiles = [...prevProfiles, newUser];
        return updatedProfiles;
      });
      setIsLoggedIn(true);
      setUser("");
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setProfiles([]);
    localStorage.removeItem("profiles");
  };
  const formSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };
  const formSubmitRemove = (event) => {
    event.preventDefault();
    handleLogout();
  };
  return (
    <>
      {!isLogginedIn ? (
        <form className={styles["form"]} onSubmit={formSubmit}>
          <Title title="Log in" />
          <Input
            IconLeft={true}
            IconRight={true}
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
            value={user}
            onChange={handleChange}
          />
          <Button onClick={handleLogin} text="Log in profile" />
        </form>
      ) : (
        <form className={styles["form"]} onSubmit={formSubmitRemove}>
          <Title title="Log out" />
          <Button onClick={handleLogout} text="Log out" />
        </form>
      )}
    </>
  );
}
export default LoginForm;
