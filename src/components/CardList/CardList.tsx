import CardFilm from '../../components/CardFilm/CardFilm';
import styles from './CardList.module.css';
import { dataFilms } from './cardData';
function CardList() {
	const filmData = dataFilms;
	return (
		<div className={styles['card_list']}>
			{filmData.map((film) => {
				return (
					<CardFilm
						key={film.id}
						id={film.id}
						name={film.title}
						poster={film.poster}
						rating={film.rating}
					/>
				);
			})}
		</div>
	);
}
export default CardList;
