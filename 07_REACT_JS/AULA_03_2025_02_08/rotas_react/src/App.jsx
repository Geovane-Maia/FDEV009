import LoginPage from './pages/login';
import HomePage from './pages/home';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CategoriasPage from './Pages/categorias';
import ProdutosPage from './pages/produtos';
import UsuariosPage from './pages/usuarios';
import Menu from './Layouts/Menu';

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />

          <Route path="./Pages/categorias" element={<CategoriasPage />} />
          <Route path="./Pages/produtos" element={<ProdutosPage />} />
          <Route path="./Pages/usuarios" element={<UsuariosPage />} />
          
          <Route path="*" element={<h1>NotFound</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App