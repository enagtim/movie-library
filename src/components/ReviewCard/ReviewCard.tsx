import styles from './ReviewCard.module.css';
import { ReviewCardProps } from './ReviewCard.props';
function ReviewCard({ title, createdAt, review }: ReviewCardProps) {
    const formDate = new Date(createdAt).toLocaleDateString('ru-Ru');
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.header__title}>{title}</div>
                <div className={styles.header__date}>{formDate}</div>
            </div>
            <div className={styles.review}>{review}</div>
        </div>
    );
}
export default ReviewCard;