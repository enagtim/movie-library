import styles from "./UserName.module.css";

function UserName({ username }) {
  return (
    <div className={styles["wrapper"]}>
      <div>{username}</div>
      <img src="/User.svg" alt="Иконка пользователя" />
    </div>
  );
}

export default UserName;
