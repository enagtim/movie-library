import styles from "./App.module.css";
import Header from "../layouts/Header/Header";
import Body from "../layouts/Body/Body";
import { UserContextProvider } from "./сontext/user.context";
function App() {
  return (
    <UserContextProvider>
      <div className={styles["app"]}>
        <Header />
        <Body />
      </div>
    </UserContextProvider>
  );
}

export default App;
