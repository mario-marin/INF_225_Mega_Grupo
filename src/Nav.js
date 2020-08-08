import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {

  const navStyle = {
      color: 'white'
  } 

  return (
    <nav>
        <h3>Contexto Equipo</h3>
        <ul className="nav-links">
            <Link style={navStyle} to="/personal">
                <li>Personal</li>
            </Link>
            <Link style={navStyle} to="/contexto">
                <li>Otro contexto</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;