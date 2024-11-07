import { useSelector } from 'react-redux';
import styles from './Favorites.module.css';
import { RootState } from '../../store/store';
import CardFilm from '../../components/CardFilm/CardFilm';
function Favorites() {
	const favorites = useSelector((state: RootState) => state.favorites.favorites);
	return (
		<>
			<h1 className={styles.title}>Избранное</h1>
			{favorites.length === 0 ? (
				<div className={styles.message}>Фильмов нет</div>
			) : (
				<div className={styles.card_list}>{favorites.map((movie) => {
					return (
						<CardFilm
							key={movie.id}
							id={movie.id}
							name={movie.name}
							poster={movie.poster}
							rating={movie.rating}
						/>
					);
				})};
				</div>
			)}
		</>

	);
}
export default Favorites;