import styles from "./LogoutButton.module.css";
function LogoutButton({ onClick }) {
  return (
    <button onClick={onClick} className={styles["log_out"]}>
      Log out
    </button>
  );
}

export default LogoutButton;
