import Title from '../../components/Title/Title';
import styles from './LoginForm.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { UserContext } from '../../сontext/user.context';
import { FormEvent, useContext } from 'react';
import { UserContextValue } from '../../сontext/user.context.props';

function LoginForm() {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('UserContext must be used within a UserContextProvider');
	}
	const { login } = context as UserContextValue;

	const formSubmit = (event: FormEvent) => {
		event.preventDefault();
		const target = event.target as typeof event.target & { loginInput: { value: string } };
		const { loginInput } = target;
		if (loginInput.value.length === 0) {
			return;
		}
		login(loginInput.value);
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
