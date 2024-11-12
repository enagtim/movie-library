import styles from './Navigation.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { logout } from '../../../store/user.slice';
import { NavLink, useNavigate } from 'react-router-dom';
import { resetFavorite } from '../../../store/favorites.slice';
import cn from 'classnames';

function Navigation() {
	const { username, isLogin } = useSelector((state: RootState) => state.profiles);
	const favorites = useSelector((state: RootState) => state.favorites.favorites);
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		dispatch(logout());
		dispatch(resetFavorite());
		navigate('/login');
	};
	return (
		<nav className={styles.navigation}>
			{isLogin ? (
				<>
					<NavLink to='/' className={({ isActive }) => cn(styles.search_film, {
						[styles.active]: isActive
					})}>
						Поиск фильмов
					</NavLink>
					<NavLink to='/favorites' className={({ isActive }) => cn(styles.my_film, {
						[styles.active]: isActive
					})}>Мои фильмы
						<div className={styles.count}>{favorites.length}</div>
					</NavLink>
					<div className={styles.wrapper}>
						<div>{username ?? ''}</div>
						<img src="/User.svg" alt="Иконка пользователя" />
					</div>
					<button onClick={handleLogout} className={styles.log_out}>
						Выйти
					</button>
				</>
			) : (
				<>
					<NavLink to='/' className={({ isActive }) => cn(styles.search_film, {
						[styles.active]: isActive
					})}>Поиск фильмов
					</NavLink>
					<NavLink to='/favorites' className={({ isActive }) => cn(styles.my_film, {
						[styles.active]: isActive
					})}>Мои фильмы
						<div className={styles.count}>{favorites.length}</div>
					</NavLink>
					<NavLink to='/login' className={({ isActive }) => cn(styles.login_text, {
						[styles.active]: isActive
					})}>Войти
						<img src="/Login.svg" alt="Иконка входа" />
					</NavLink>
				</>
			)}
		</nav>
	);
}

export default Navigation;
