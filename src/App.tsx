import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Atividade from './pages/atividade';
import Home from './pages/home';
import Login from './pages/login';
import Perfil from './pages/perfil';
import Treinos from './pages/treinos';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/atividade" element={<Atividade />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/treinos" element={<Treinos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
