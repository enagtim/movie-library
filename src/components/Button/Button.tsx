import styles from "./Button.module.css";
import ButtonProps from './Button.props';

function Button({ text } : ButtonProps) {
  return <button className={styles["button"]}>{text}</button>;
}
export default Button;
