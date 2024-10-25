import CardList from "../../components/CardList/CardList";
import FormLayoutSearch from "../../components/FormLayoutSearch/FormLayoutSearch";
import TitleTextLayout from "../../components/TitleTextLayout/TitleTextLayout";
import styles from "./SearchFilmPage.module.css";

function SearchFilmPage () {
    return (
        <div className={styles['content']}>
            <TitleTextLayout/>
            <FormLayoutSearch/>
            <CardList/>
        </div>
    )
}

export default SearchFilmPage;