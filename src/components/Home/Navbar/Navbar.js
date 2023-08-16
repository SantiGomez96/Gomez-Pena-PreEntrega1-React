import { useContext } from "react";
import { dataContext } from "../../Context/DataContext";

import {Link} from "react-router-dom";

import TotalItems from "../../CartContent/TotalItems";

import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className='nav-container'>
        <nav className='navbar'>
          <Link to={"/"}>
            <img className='navbar-logo' src='../public/LogosAdor/LOGO ADOR' alt='Logo Ador'></img>
          </Link>
          <button>EARCUFFS Y CANDONGAS</button>
          <button>CADENAS</button>
          <button>PULSERAS</button>
          <Link className='seeCarrito' to = {"/cart"}>🛒
          {cart.length > 0 ? <TotalItems /> : null}
          </Link>
        </nav>
    </div>
  );
};

export default Navbar;