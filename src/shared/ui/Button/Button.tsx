import styles from './Button.module.css';

function Button({ content }: { content: string }) {
	return <button className={styles.button}>{content}</button>;
}
export default Button;
