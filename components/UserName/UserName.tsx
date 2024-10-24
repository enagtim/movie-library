import styles from "./UserName.module.css";
import UserNameProps from './UserName.props';

function UserName({ username }: UserNameProps) {
  return (
    <div className={styles["wrapper"]}>
      <div>{username}</div>
      <img src="/User.svg" alt="Иконка пользователя" />
    </div>
  );
}

export default UserName;
