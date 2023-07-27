import "./Navbar.css";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav className='navbar'>
          <img className='navbar-logo' src='../public/LogosAdor/LOGO ADOR' alt='Logo Ador'></img>
          <a>EARCUFFS Y CANDONGAS</a>
          <a>CADENAS</a>
          <a>PULSERAS</a>
          <Link className='seeCarrito' to = {"/cart"}>🛒</Link>
        </nav>
    </div>
  );
};

export default Navbar