import CardList from '../../components/CardList/CardList';
import FormLayoutSearch from '../../components/FormLayoutSearch/FormLayoutSearch';
import TitleTextLayout from '../../components/TitleTextLayout/TitleTextLayout';
function SearchFilmPage () {
	return (
		<>
			<TitleTextLayout/>
			<FormLayoutSearch/>
			<CardList/>
		</>
	);
}

export default SearchFilmPage;