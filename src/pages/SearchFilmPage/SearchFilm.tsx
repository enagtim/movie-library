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
function SearchFilmPage() {

	const [films, setFilms] = useState<CardFilmProps[]>([]);
	const [findedFilm, setFindedFilm] = useState<boolean | null>(null);

	const options = {
		method: 'GET',
		headers: { accept: 'application/json', 'X-API-KEY': 'XYNPWWX-0VZ4EF2-HS2W1FV-JNA4H0J' }
	};
	const page: number = 1;
	const limit: number = 8;

	const getListFilm = async (query: string) => {
		if (query.length === 0) {
			return;
		}
		try {
			const { data } = await axios.get<FilmsResponse>('https://api.kinopoisk.dev/v1.4/movie/search', {
				...options,
				params: {
					page,
					limit,
					query
				}
			});
			if (data.docs.length === 0) {
				setFindedFilm(false);
			} else {
				const validFilms = data.docs.filter(f => f.poster && f.poster.url);
				setFilms(validFilms);
				setFindedFilm(true);
			}
		} catch (e) {
			setFindedFilm(false);
			return e;
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