import styles from './FormLayoutSearch.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { SubmitEvent } from './FormLayout.props';
function FormLayoutSearch({ onSubmit }: SubmitEvent) {
	return (
		<>
			<form className={styles['form']} onSubmit={onSubmit}>
				<Input
					IconLeft={false}
					IconRight={true}
					type="text"
					name="search_input"
					placeholder="Введите название"
					autoComplete="off"
				/>
				<Button text="Искать" />
			</form>
		</>
	);
}
export default FormLayoutSearch;
