import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';
function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.wrapper}>
				<img
					className={styles.bookmark}
					src="/Bookmark.svg"
					alt="Иконка избранное"
				/>
				<Navigation />
				<button className={styles.burger}>
					<div className={styles.burger__wrapper}>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</button>
			</div>
		</div>
	);
}

export default Header;
