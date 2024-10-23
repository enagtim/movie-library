import Paragraph from "../../components/Paragraph/Paragraph";
import Title from "../../components/Title/Title";
import styles from "./TitleTextLayout.module.css";

function TitleTextLayout() {
  return (
    <div className={styles["header_text"]}>
      <Title title="Search" />
      <Paragraph
        text="Enter the name of a movie, 
         TV series or cartoon to search and add to
         favorites."
      />
    </div>
  );
}

export default TitleTextLayout;
