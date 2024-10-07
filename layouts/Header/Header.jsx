import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <a href="#">
          <img src="/Bookmark.svg" alt="Иконка избранное" />
        </a>
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
