import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <img className="bookmark" src="/Bookmark.svg" alt="Иконка избранное" />
        <Navigation />
        <BurgerMenu />
      </div>
    </div>
  );
}

export default Header;
