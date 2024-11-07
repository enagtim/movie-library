import { Link } from 'react-router-dom';
import Poster from '../Poster/Poster';
import styles from './CardFilm.module.css';
import { CardFilmProps } from './CardFilm.props';
import Rating from '../RatingButton/Rating';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { addToFavorite, removeFavorite } from '../../store/favorites.slice';
import cn from 'classnames';

function CardFilm({ rating, poster, name, id }: CardFilmProps) {

	const dispatch = useDispatch<AppDispatch>();
	const favorites = useSelector((state: RootState) => state.favorites.favorites);
	const isFavorites = favorites.some(movie => movie.id === id);

	const ButtonCLick = () => {
		if (isFavorites) {
			dispatch(removeFavorite({ id, rating, name, poster }));
		} else {
			dispatch(addToFavorite({ id, rating, name, poster }));
		}
	};
	return (
		<div className={styles.card_film}>
			<Rating numberRating={rating.imdb} />
			<Link to={`/movie/${id}`}><Poster src={poster.url} /></Link>
			<div className={styles.name_layout}>
				<div className={styles.name_film}>{name}</div>
				<button onClick={ButtonCLick} className={styles.in_favorite}>
					<img alt='Иконка избранное' src={isFavorites ? '/BookmarkCard.svg' : '/like.svg'} />
					<div className={cn(styles.text, {
						[styles.active]: isFavorites
					})}>{isFavorites ? 'В избранном' : 'В избранное'}</div>
				</button>
			</div>
		</div >
	);
}

export default CardFilm;
