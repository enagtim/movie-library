import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <a href="#">
            <img src="/Bookmark.svg" alt="Иконка избранное"/>
        </a>
        <Navigation/>
    </div>
  )
}

export default Header;