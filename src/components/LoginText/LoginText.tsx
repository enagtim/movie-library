import { NavLink } from 'react-router-dom';
import styles from './LoginText.module.css';
import cn from 'classnames';
function LoginText() {
	return (
		<NavLink to='/login' className={({isActive}) => cn(styles['login_text'], {
			[styles.active]: isActive
		})}>
      Войти
			<img src="/Login.svg" alt="Иконка входа" />
		</NavLink>
	);
}

export default LoginText;
