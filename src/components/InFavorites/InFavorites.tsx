import styles from './InFavorites.module.css';

function InFavorites() {
	return (
		<div className={styles['in_favorite']}>
			<img src="/like.svg" alt="Иконка лайка" />
			<div className={styles['text']}>В избранное</div>
		</div>
	);
}

export default InFavorites;
