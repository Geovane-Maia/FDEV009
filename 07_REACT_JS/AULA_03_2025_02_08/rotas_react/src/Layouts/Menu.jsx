import { Link } from 'react-router-dom'
function Menu() {
    return (
        <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/categorias">Categorias</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/usuarios">Usuarios</Link>
          </li>
        </ul>
        </>
    )
}

export default Menu;