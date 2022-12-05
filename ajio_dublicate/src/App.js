import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { ChakraProvider } from "@chakra-ui/react";
import { Productpage } from "./product_page/productpage.js"
import {Route, Routes} from 'react-router-dom';
import { HomePage } from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path = "/" element = {<HomePage/>}></Route>
       <Route path = "/men" element = {<Productpage/>}></Route>
       <Route path = "/women" element = {<Productpage/>}></Route>
       <Route path = "/kids" element = {<Productpage/>}></Route>
       <Route path = "/indie" element = {<Productpage/>}></Route>
       <Route path = "/kitchen" element = {<Productpage/>}></Route>

      </Routes>
      <Footer/>

      
    </div>
  );
}

export default App;