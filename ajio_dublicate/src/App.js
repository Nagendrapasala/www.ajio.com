import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import { HomePage } from './Components/HomePage';
import AllRoutes from './Components/AllRoutes';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <HomePage/>
        <Footer/>
        <AllRoutes/>
    </div>
  );
}

export default App;
