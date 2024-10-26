import styles from './Poster.module.css';
import PosterProps from './Poster.props';

function Poster({ src }: PosterProps) {
	return <img className={styles['poster']} src={src} alt="Постер фильма" />;
}

export default Poster;
