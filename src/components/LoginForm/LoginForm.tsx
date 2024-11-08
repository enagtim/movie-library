import Title from '../../components/Title/Title';
import styles from './LoginForm.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '..//../store/user.slice';
import { AppDispatch } from '../../store/store';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
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
		<form className={styles['form']} onSubmit={formSubmit}>
			<Title title="Войти" />
			<Input
				IconLeft={true}
				IconRight={true}
				type="text"
				name="loginInput"
				placeholder="Ваше имя"
				autoComplete="off"
			/>
			<Button text="Войти в профиль" />
		</form>
	);
}
export default LoginForm;
