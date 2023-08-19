import Login from './components/auth/login/LoginForm'
import Navbar from './components/navbar/Navbar';
import Products from './components/Products/Products';
import Register from './components/auth/register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return  (
    <Router>
    <Navbar />
  <Routes>
  <Route path="/" element={<Products />} />
  <Route path ="/login" element={<Login/>}/>
  <Route path="/register" element={<Register />} />
  </Routes>
  </Router>
    )
  }

export default App;
