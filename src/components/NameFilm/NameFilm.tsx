import styles from './NameFilm.module.css';
import NameFilmProps from './NameFilm.props';

function NameFilm({ name }: NameFilmProps) {
	return <div className={styles['name_film']}>{name}</div>;
}

export default NameFilm;
