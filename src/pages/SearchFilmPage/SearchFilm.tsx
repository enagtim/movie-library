import { FormEvent, useState } from 'react';
import CardList from '../../shared/ui/CardList/CardList';
import { CardFilmProps, FilmsResponse } from '../../shared/ui/CardFilm/CardFilm.props';
import axios from 'axios';
import styles from './SearchFilm.module.css';
import Input from '../../shared/ui/Input/Input';
import Button from '../../shared/ui/Button/Button';

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
		const target = event.target as typeof event.target & { search_input: { value: string } };
		const { search_input } = target;
		setFindedFilm(null);
		getListFilm(search_input.value);
	};
	return (
		<>
			<div className={styles.header_text}>
				<h1 className={styles.title}>Поиск</h1>
				<p className={styles.paragraph}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</p>
			</div>
			<form className={styles.form} onSubmit={submit}>
				<Input
					IconLeft={false}
					IconRight={true}
					type="text"
					name="search_input"
					placeholder="Введите название"
					autoComplete="off"
				/>
				<Button content='Искать' />
			</form>
			{findedFilm === false ? (
				<div className={styles.content}>
					<div className={styles.wrapper}>
						<div className={styles.header} >Упс... Ничего не найдено</div>
						<div className={styles.text}>Попробуйте изменить запрос или ввести более точное название фильма</div>
					</div>
				</div>
			) : (
				<CardList films={films} />
			)}
		</>
	);
}

export default SearchFilmPage;