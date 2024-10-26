import { Link } from 'react-router-dom';
import NameFilmLayout from '../NameFilmLayout/NameFilmLayout';
import Poster from '../Poster/Poster';
import RatingButton from '../RatingButton/RatingButton';
import styles from './CardFilm.module.css';
import CardFilmProps from './CardFilm.props';

function CardFilm({ rating, poster, name, id }: CardFilmProps) {
	return (
		<Link to={`/movie/${id}`} className={styles['card_film']}>
			<RatingButton numberRating={rating} />
			<Poster src={poster} />
			<NameFilmLayout title={name} />
		</Link>
	);
}

export default CardFilm;
