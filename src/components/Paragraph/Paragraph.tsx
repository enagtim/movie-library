import styles from './Paragraph.module.css';
import ParagraphProps from './Paragraph.props';
function Paragraph({ text }: ParagraphProps) {
	return <div className={styles['paragraph']}> {text}</div>;
}

export default Paragraph;
