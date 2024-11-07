import { NavLink } from 'react-router-dom';
import styles from './MyFilm.module.css';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
function MyFilm() {
	const favorites = useSelector((state: RootState) => state.favorites.favorites);
	return (
		<NavLink to='/favorites' className={({ isActive }) => cn(styles['my_film'], {
			[styles.active]: isActive
		})}>Мои фильмы
			<div className={styles.count}>{favorites.length}</div>
		</NavLink>
	);
}
export default MyFilm;
