import NameFilmLayout from '../NameFilmLayout/NameFilmLayout';
import Poster from '../Poster/Poster';
import RatingButton from '../RatingButton/RatingButton';
import styles from './CardFilm.module.css';
import CardFilmProps from './CardFilm.props';

function CardFilm({ rating, poster, name }: CardFilmProps) {
	return (
		<div className={styles['card_film']}>
			<RatingButton numberRating={rating} />
			<Poster src={poster} />
			<NameFilmLayout title={name} />
		</div>
	);
}

export default CardFilm;
