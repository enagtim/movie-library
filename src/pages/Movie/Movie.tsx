import { useParams } from 'react-router-dom';
import styles from './Movie.module.css';

function Movie () {
	const {id} = useParams();
	return (
		<div className={styles['wrapper']}>
			Movie - {id}
		</div>
	);
}
export default Movie;