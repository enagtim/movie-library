import styles from './LogoutButton.module.css';
import LogoutProps from './Logout.props';
function LogoutButton({ onClick }: LogoutProps) {
	return (
		<button onClick={onClick} className={styles['log_out']}>
      Выйти
		</button>
	);
}

export default LogoutButton;
