import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/atividade" element={<Atividade />} /> */}
          {/* <Route path="/perfil" element={<Perfil />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
