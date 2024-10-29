import CardFilm from '../../components/CardFilm/CardFilm';
import styles from './CardList.module.css';
import { CardListProps } from './CardList.props';
function CardList({ films }: CardListProps) {
	return (
		<div className={styles['card_list']}>
			{films.map((f) => {
				return (
					<CardFilm
						key={f.id}
						id={f.id}
						name={f.name}
						poster={f.poster}
						rating={f.rating}
					/>
				);
			})}
		</div>
	);
}
export default CardList;
