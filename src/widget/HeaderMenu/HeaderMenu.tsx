import { Outlet } from 'react-router-dom';
import Header from '../../shared/ui/Header/Header';
import styles from './HeaderMenu.module.css';
function HeaderMenu() {
	return (
		<>
			<Header />
			<div className={styles.body}>
				<Outlet />
			</div>
		</>
	);
}
export default HeaderMenu;