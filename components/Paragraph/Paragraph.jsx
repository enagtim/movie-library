import styles from "./Paragraph.module.css";

function Paragraph({ text }) {
  return <div className={styles["paragraph"]}> {text}</div>;
}

export default Paragraph;
