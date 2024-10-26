import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';
function Header() {
	return (
		<div className={styles['header']}>
			<div className={styles['wrapper']}>
				<img
					className={styles['bookmark']}
					src="/Bookmark.svg"
					alt="Иконка избранное"
				/>
				<Navigation />
				<BurgerMenu />
			</div>
		</div>
	);
}

export default Header;
