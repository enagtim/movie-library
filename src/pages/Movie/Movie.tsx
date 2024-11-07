import { useParams } from 'react-router-dom';
import styles from './Movie.module.css';
import { useEffect, useState } from 'react';
import { MovieProps } from './Movie.props';
import axios from 'axios';
import { ReviewCardProps, ReviewResponse } from '../../components/ReviewCard/ReviewCard.props';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CardFilmProps } from '../../components/CardFilm/CardFilm.props';
import { removeFavorite, addToFavorite } from '../../store/favorites.slice';
import cn from 'classnames';

function Movie() {
	const { id } = useParams();
	const [review, setReview] = useState<ReviewCardProps[] | null>(null);
	const [filmDetails, setFilmDetails] = useState<MovieProps | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const dispatch = useDispatch();
	const favorites = useSelector((state: RootState) => state.favorites.favorites);
	const isFavorite = favorites.some((movie) => movie.id === Number(id));

	const options = {
		method: 'GET',
		headers: { accept: 'application/json', 'X-API-KEY': 'XYNPWWX-0VZ4EF2-HS2W1FV-JNA4H0J' }
	};
	useEffect(() => {
		const getFilmDetails = async () => {
			try {
				const [filmResponse, reviewResponse] = await Promise.all([
					axios.get<MovieProps>(`https://api.kinopoisk.dev/v1.4/movie/${id}`, options),
					axios.get<ReviewResponse>(`https://api.kinopoisk.dev/v1.4/review?page=1&limit=1&movieId=${id}`, options)
				]);
				setFilmDetails(filmResponse.data);
				setReview(reviewResponse.data.docs);
			}
			catch (e) {
				return e;
			} finally {
				setIsLoading(false);
			}
		};
		getFilmDetails();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);
	const premiereWorldDate = filmDetails && filmDetails.premiere.world ?
		new Date(filmDetails.premiere.world) : null;
	if (isLoading) {
		return <div className={styles.loader} >Загрузка...</div>;
	}
	const handleFavoriteClick = () => {
		if (isFavorite) {
			dispatch(removeFavorite(filmDetails as CardFilmProps));
		} else {
			dispatch(addToFavorite(filmDetails as CardFilmProps));
		}
	};
	return (
		<>
			{filmDetails ? (
				<div className={styles.сontent}>
					<div className={styles.content__header}>
						<div className={styles.title}>Поиск фильмов</div>
						<h3 className={styles.film_name}>{filmDetails.name}</h3>
					</div>
					<div className={styles.content__main}>
						<img src={filmDetails.poster.url} alt="Постер фильма" />
						<div className={styles.content_rigth}>
							<div className={styles.description}>{filmDetails.description ? filmDetails.description : 'Описание фильма отсутствует'}</div>
							<div className={styles.tag_rating}>
								<div className={styles.rating}>
									<img src="/star.svg" alt="Иконка рейтинга" />
									<div className={styles.rating__count}>{filmDetails.rating.imdb}</div>
								</div>
								<button onClick={handleFavoriteClick} className={styles.in_favorite}>
									<img
										src={isFavorite ? '/BookmarkCard.svg' : '/like.svg'}
										alt="Иконка избранного" />
									<div
										className={cn(styles.text, {
											[styles.active]: isFavorite
										})}>
										{isFavorite ? 'В избранном' : 'В избранное'}
									</div>
								</button>
							</div>
							<div className={styles.tag_film}>
								<div className={styles.tag__title}>Тип</div>
								<div className={styles.tag__content}>{filmDetails.type ? filmDetails.type : 'Информация отсутствует'}</div>
							</div>
							<div className={styles.tag_film}>
								<div className={styles.tag__title}>Дата выхода</div>
								<div className={styles.tag__content}>{premiereWorldDate ? premiereWorldDate.toLocaleDateString('ru-Ru') : 'Информация отсутствует'}</div>
							</div>
							<div className={styles.tag_film}>
								<div className={styles.tag__title}>Длительность</div>
								<div className={styles.tag__content}>{filmDetails.movieLength ? `${filmDetails.movieLength} мин` : 'Информация отсутствует'}</div>
							</div>
							<div className={styles.tag_film}>
								<div className={styles.tag__title}>Жанр</div>
								<div className={styles.tag__content}>
									{filmDetails.genres ? filmDetails.genres.map((genre) => genre.name).join(', ')
										: 'Информация отсутствует'
									}
								</div>
							</div>
						</div>
					</div>
					<div className={styles.content__footer}>
						<div className={styles.tag__title}>Отзывы</div>
						{review ? (
							review.map((review) => (
								<ReviewCard key={review.id} id={review.id} title={review.title ? review.title : 'Рецензия'} review={review.review ? review.review : 'Описание фильма отсуствует'} createdAt={review.createdAt ? review.createdAt : 'Дата отзыва не указана'} />
							))
						) : (
							<div className={styles.review_unFind}>Нет отзывов</div>
						)}
					</div>
				</div >

			) : (
				<div className={styles.filmDetails_unFind}>Подробная информация о фильме отсутствует</div>
			)
			}
		</>
	);
}
export default Movie;