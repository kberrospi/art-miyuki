import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/logo.png';

export const Navbar = () => {
  return (
    <div>

      <nav className="navbar navbar-light bg-light navbar-center menu ">
        <Link className="navbar-brand" to="/art-miyuki">
          <img src={logo} width="215" height="215" alt="" />
        </Link>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light menu1 ">

        <div className="collapse navbar-collapse navbar-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link" to="/art-miyuki">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/evidences">Evidencias</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Accesorios
               </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/aretes">Aretes</Link>
                <Link className="dropdown-item" to="/pulseras">Pulseras</Link>
                <Link className="dropdown-item" to="/diademas">Diademas</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}
