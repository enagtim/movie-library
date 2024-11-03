import styles from './Rating.module.css';
import RatingProps from './Rating.props';
function Rating({ numberRating }: RatingProps) {
	return (
		<div className={styles['rating']}>
			<img src="/star.svg" alt="Иконка рейтинга" />
			<div className={styles['raiting__text']}>{numberRating}</div>
		</div>
	);
}

export default Rating;
