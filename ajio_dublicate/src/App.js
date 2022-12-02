import logo from './logo.svg';
import './App.css';
import Login from './login-component/login';
import { Route, Routes } from 'react-router-dom';
import Cart from './cart-Component/cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
