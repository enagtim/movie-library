import styles from "./App.module.css";
import Header from "../layouts/Header/Header";
import PurpleBlob from "../components/PurpleBlob/PurpleBlob";
import BlueBlob from "../components/BlueBlob/BlueBlob";
import Body from "../layouts/Body/Body";
import PurpleWhiteBlob from "../components/PurpleWhiteBlob/PurpleWhiteBlob";
import GreenBlob from "../components/GreenBlob/GreenBlob";
function App() {
  return (
    <div className={styles["app"]}>
      <PurpleBlob />
      <BlueBlob />
      <PurpleWhiteBlob />
      <GreenBlob />
      <Header />
      <Body />
    </div>
  );
}

export default App;
