import styles from './Input.module.css';
import className from 'classnames';
import InputProps from './Input.props';
function Input({ IconLeft, IconRight, ...props }: InputProps) {
	return (
		<div className={styles['wrapper_input']}>
			<img
				className={className(styles['icon_left'], {
					[styles['icon_none']]: IconLeft
				})}
				src="/Search.svg"
				alt="Иконка поиска"
			/>
			<input className={styles['input']} {...props} />
			<img
				className={className(styles['icon_right'], {
					[styles['icon_none']]: IconRight
				})}
				src="/Right_Icon.svg"
				alt="Иконка справа"
			/>
		</div>
	);
};

export default Input;
