import styles from "./Input.module.css";
import className from "classname";
import { forwardRef } from "react";
const Input = forwardRef(function Input(
  { IconLeft, IconRight, ...props },
  ref
) {
  return (
    <div className={styles["wrapper_input"]}>
      <img
        className={className(styles["icon_left"], {
          [styles["icon_none"]]: IconLeft,
        })}
        src="/Search.svg"
        alt="Иконка поиска"
      />
      <input ref={ref} className={styles["search_input"]} {...props} />
      <img
        className={className(styles["icon_right"], {
          [styles["icon_none"]]: IconRight,
        })}
        src="/Right_Icon.svg"
        alt="Иконка справа"
      />
    </div>
  );
});

export default Input;
