import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Header from './components/Header/Header';
import Trending from './components/Trending/Trending';
import HomeBody from './components/HomeBody/HomeBody';
function App() {
  return (
    <div className="App a">
      <NavBar/>
      <Header />
      <Trending />
      <HomeBody />
    </div>
  );
}

export default App;
