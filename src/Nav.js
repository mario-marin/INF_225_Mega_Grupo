import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {

  const navStyle = {
      color: 'white'
  } 

  return (
    <nav>
        <h3>Mega Grupo</h3>
        <ul className="nav-links">
            <Link style={navStyle} to="/personal">
                <li>Equipo</li>
            </Link>
            <Link style={navStyle} to="/equipamiento">
                <li>Equipamiento</li>
            </Link>
            <Link style={navStyle} to="/contexto">
                <li>Otro contexto</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;