import styles from './ErrorPage.module.css';
function ErrorPage() {
	return (
		<div className={styles.content}	>
			<div className={styles.wrapper}>
				<div className={styles.header} >Ошибка 404</div>
				<div className={styles.text}>Такой страницы не существует. Попробуйте изменить адрес запроса страницы</div>
			</div>
		</div>
	);
}
export default ErrorPage;