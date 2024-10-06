import "./App.css";
import Header from '../layouts/Header/Header';
import TitleTextLayout from '../layouts/TitleTextLayout/TitleTextLayout';
import FormLayoutSearch from "../layouts/FormLayoutSearch/FormLayoutSearch";
function App() {
  return (
    <div className='app'>
      <Header/>
      <TitleTextLayout/>
      <FormLayoutSearch/>
    </div>
  )
}

export default App;
