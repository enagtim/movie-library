import LoginText from '../../components/LoginText/LoginText';
import MyFilm from '../../components/MyFilm/MyFilm';
import SearchFilm from '../../components/SearchFilm/SearchFilm';
import './Navigation.css'

function Navigation() {
  return (
    <nav className='navigation'>
      <SearchFilm/>
      <MyFilm/>
      <LoginText/>
    </nav>
  )
}

export default Navigation;