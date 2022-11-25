import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="">Экзотические ФРУКТЫ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/juice">Экзотические СОКИ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/wine">Аюрведические ВИНА</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/smoothies">Экзотические СМУЗИ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/salad">Экзотические САЛАТЫ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/jam">Экзотические ДЖЕМЫ</NavLink>
        </li>
      </ul>
    </nav>
  );
};
