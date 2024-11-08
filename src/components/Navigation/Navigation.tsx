import LoginText from '../../components/LoginText/LoginText';
import MyFilm from '../../components/MyFilm/MyFilm';
import SearchFilm from '../../components/SearchFilm/SearchFilm';
import styles from './Navigation.module.css';
import UserName from '../../components/UserName/UserName';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { logout } from '..//../store/user.slice';
import { useNavigate } from 'react-router-dom';
import { resetFavorite } from '..//../store/favorites.slice';

function Navigation() {

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		dispatch(logout());
		dispatch(resetFavorite());
		navigate('/login');
	};
	const { username, isLogin } = useSelector((state: RootState) => state.profiles);
	return (
		<nav className={styles['navigation']}>
			{isLogin ? (
				<>
					<SearchFilm />
					<MyFilm />
					<UserName username={username ?? ''} />
					<LogoutButton onClick={handleLogout} />
				</>
			) : (
				<>
					<SearchFilm />
					<MyFilm />
					<LoginText />
				</>
			)}
		</nav>
	);
}

export default Navigation;
