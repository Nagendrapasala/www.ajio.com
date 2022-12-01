import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import { HomePage } from './Components/HomePage';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <HomePage/>
        <Footer/>
    </div>
  );
}

export default App;
