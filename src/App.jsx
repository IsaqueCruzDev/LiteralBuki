import './App.css';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Login from "./components/Login/Login.jsx";
import Landing from './pages/landing/index.jsx';
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router> 
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login/>} />
          </Routes>
      </Router>
    </>
  )
}
export default App;