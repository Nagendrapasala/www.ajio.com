import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from "@chakra-ui/react";
import { Productpage } from "./product_page/productpage.js"
function App() {
  return (
    <div className="App">

      <ChakraProvider>
        <Productpage />
      </ChakraProvider>
    </div>
  );
}

export default App;