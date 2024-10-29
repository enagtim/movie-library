import { FormEvent, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import FormLayoutSearch from '../../components/FormLayoutSearch/FormLayoutSearch';
import TitleTextLayout from '../../components/TitleTextLayout/TitleTextLayout';
import { CardFilmProps, FilmsResponse } from '../../components/CardFilm/CardFilm.props';
import axios from 'axios';
import NotFindTextLayout from '../../components/NotFindText/NotFindText';
import styles from './SearchFilm.module.css';

export type InputForm = {
	search_input: {
		value: string
	}
};
const options = {
	method: 'GET',
	headers: { accept: 'application/json', 'X-API-KEY': 'XYNPWWX-0VZ4EF2-HS2W1FV-JNA4H0J' }
};
function SearchFilmPage() {

	const [films, setFilms] = useState<CardFilmProps[]>([]);
	const [findedFilm, setFindedFilm] = useState<boolean | null>(null);

	const page: number = 1;
	const limit: number = 8;

	const getListFilm = async (query: string) => {
		try {
			const { data } = await axios.get<FilmsResponse>('https://api.kinopoisk.dev/v1.4/movie/search', {
				...options,
				params: {
					page,
					limit,
					query
				}
			});
			// потом сделать более подробно, чтобы нельзя было отправлять запросы без фильма
			if (data.docs.length === 0) {
				setFindedFilm(false);
			} else {
				const validFilms = data.docs.filter(f => f.poster && f.poster.url);
				setFilms(validFilms);
				setFindedFilm(true);
			}
		} catch (e) {
			console.error(e);
			setFindedFilm(false);
		}
	};
	const submit = async (event: FormEvent) => {
		event.preventDefault();
		const target = event.target as typeof event.target & InputForm;
		const { search_input } = target;
		setFindedFilm(null);
		getListFilm(search_input.value);
	};
	return (
		<>
			<>
				<TitleTextLayout />
				<FormLayoutSearch onSubmit={submit} />
			</>
			{findedFilm === false ? (
				<div className={styles.content}>
					<NotFindTextLayout />
				</div>
			) : (
				<CardList films={films} />
			)}
		</>
	);
}

export default SearchFilmPage;