import { Outlet } from "react-router-dom";
import { UserContextProvider } from "..//../сontext/user.context";
import Header from "../../components/Header/Header";
import styles from './HeaderMenu.module.css'
function HeaderMenu () {
    return (
        <UserContextProvider>
            <Header/>
            <div className={styles['body']}>
                <Outlet/>
            </div>
        </UserContextProvider>
    )
}
export default HeaderMenu;