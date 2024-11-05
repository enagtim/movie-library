import styles from './NotFindText.module.css';
function NotFindTextLayout() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header} >Упс... Ничего не найдено</div>
            <div className={styles.text}>Попробуйте изменить запрос или ввести более точное название фильма</div>
        </div>
    );
}
export default NotFindTextLayout;