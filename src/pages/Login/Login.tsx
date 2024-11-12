import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/ui/Button/Button';
import Input from '../../shared/ui/Input/Input';
import { AppDispatch } from '../../store/store';
import { login } from '../../store/user.slice';
import styles from './Login.module.css';
function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const formSubmit = (event: FormEvent) => {
		event.preventDefault();
		const target = event.target as typeof event.target & { loginInput: { value: string } };
		const { loginInput } = target;
		if (loginInput.value.length === 0) {
			return;
		}
		dispatch(login(loginInput.value));
		navigate('/');
	};
	return (
		<form className={styles.form} onSubmit={formSubmit}>
			<h1 className={styles.title}>Войти</h1>
			<Input
				IconLeft={true}
				IconRight={true}
				type="text"
				name="loginInput"
				placeholder="Ваше имя"
				autoComplete="off"
			/>
			<Button content='Войти в профиль' />
		</form>
	);
}
export default Login;