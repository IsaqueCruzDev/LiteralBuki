import './App.css';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Login from "./pages/Login/Login.jsx";
import Landing from './pages/landing/index.jsx';
import Perfil from './pages/Perfil/Perfil.jsx';

import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router> 
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/perfil' element={<Perfil/>} />
        </Routes>
      </Router>
    </>
  )
}
export default App;