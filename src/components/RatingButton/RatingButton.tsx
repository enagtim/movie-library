import styles from './RatingButton.module.css';
import RatingProps from './RatingButton.props';
function RatingButton({numberRating}: RatingProps) {
	return (
		<div className={styles['rating']}>
			<img src="/star.svg" alt="Иконка рейтинга" />
			<div className={styles['raiting__text']}>{numberRating}</div>
		</div>
	);
}

export default RatingButton;
