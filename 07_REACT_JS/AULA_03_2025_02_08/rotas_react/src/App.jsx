import LoginPage from './pages/login';
import HomePage from './pages/home';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CategoriasPages from './Pages/categorias';
import ProdutosPages from './pages/produtos';
import UsuariosPages from './pages/usuarios';
import Menu from './Layouts/Menu';

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Menu" element={<Menu />} />

          <Route path="/Pages/categorias" element={<CategoriasPages />} />
          <Route path="/Pages/produtos" element={<ProdutosPages />} />
          <Route path="/Pages/usuarios" element={<UsuariosPages />} />
          
          <Route path="*" element={<h1>NotFound</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App