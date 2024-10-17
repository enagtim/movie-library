import styles from "./App.module.css";
import Header from "../layouts/Header/Header";
import PurpleBlob from "../components/PurpleBlob/PurpleBlob";
import BlueBlob from "../components/BlueBlob/BlueBlob";
import Body from "../layouts/Body/Body";
import PurpleWhiteBlob from "../components/PurpleWhiteBlob/PurpleWhiteBlob";
import GreenBlob from "../components/GreenBlob/GreenBlob";
import { UserContextProvider } from "./сontext/user.context";
function App() {
  return (
    <UserContextProvider>
      <div className={styles["app"]}>
        <PurpleBlob />
        <BlueBlob />
        <PurpleWhiteBlob />
        <GreenBlob />
        <Header />
        <Body />
      </div>
    </UserContextProvider>
  );
}

export default App;
