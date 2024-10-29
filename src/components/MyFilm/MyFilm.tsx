import { NavLink } from 'react-router-dom';
import styles from './MyFilm.module.css';
import cn from 'classnames';
function MyFilm() {
	return (
		<NavLink to='/favorites' className={({isActive}) => cn(styles['my_film'], {
			[styles.active]: isActive
		})}>Мои фильмы
			<img src="/Ellipse.svg" alt="Икона фильмов" />
		</NavLink>
	);
}
export default MyFilm;
