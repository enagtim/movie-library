import { Link } from 'react-router-dom';
import NameFilmLayout from '../NameFilmLayout/NameFilmLayout';
import Poster from '../Poster/Poster';
import styles from './CardFilm.module.css';
import { CardFilmProps } from './CardFilm.props';
import Rating from '../RatingButton/Rating';

function CardFilm({ rating, poster, name, id }: CardFilmProps) {
	return (
		<Link to={`/movie/${id}`} className={styles['card_film']}>
			<Rating numberRating={rating.imdb} />
			<Poster src={poster.url} />
			<NameFilmLayout title={name} />
		</Link>
	);
}

export default CardFilm;
