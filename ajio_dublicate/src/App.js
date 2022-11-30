import logo from './logo.svg';
import './App.css';
import Login from './login-component/login';
import { Route, Routes } from 'react-router-dom';
import Signup from './login-component/signup';
import Otp from "./login-component/otp"
import InitialFocus from './login-component/otp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/otp' element={<Otp />} />
      </Routes>
    </div>
  );
}

export default App;
