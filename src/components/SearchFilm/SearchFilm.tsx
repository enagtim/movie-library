import { NavLink } from 'react-router-dom';
import styles from './SearchFilm.module.css';
import cn from 'classnames';
function SearchFilm() {
	return (
		<NavLink to='/' className={({isActive}) => cn(styles['search_film'], {
			[styles.active]: isActive
		})}>
      Поиск фильмов
		</NavLink>
	);
}

export default SearchFilm;
