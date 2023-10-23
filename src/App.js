import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Header from './components/Header/Header';
import Trending from './components/Trending/Trending';
function App() {
  return (
    <div className="App a">
      <NavBar/>
      <Header />
      <Trending />
    </div>
  );
}

export default App;
