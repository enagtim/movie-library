import Paragraph from "../../components/Paragraph/Paragraph";
import Title from "../../components/Title/Title";
import styles from "./TitleTextLayout.module.css";

function TitleTextLayout() {
  return (
    <div className={styles["header_text"]}>
      <Title title="Поиск" />
      <Paragraph
        text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
      />
    </div>
  );
}

export default TitleTextLayout;
