

import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import { HomePage } from './Components/HomePage';
import Contact from './Components/Contact';
import {Routes, Route} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <div className="App">
     
        {/* <Navbar/> 
        
          
       
        
        <Routes>
          
          <Route path = {`/productPage/${Men}`} element = {<ProductPage/>}/>
          <Route path = "/women" element = {<h1>WOMEN</h1>}/>
          <Route path = "/kids" element = {<h1></h1>}/>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
        </Routes>
        
        <Footer/> */}
        
       
        
    </div>
  );
}

export default App;
