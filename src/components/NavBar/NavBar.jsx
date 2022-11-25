import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="list">
        <li className="item">
          <NavLink to="">Экзотические ФРУКТЫ</NavLink>
        </li>
        <li className="item">
          <NavLink to="/juice">Экзотические СОКИ</NavLink>
        </li>
        <li className="item">
          <NavLink to="/wine">Аюрведические ВИНА</NavLink>
        </li>
        <li className="item">
          <NavLink to="/smoothies">Экзотические СМУЗИ</NavLink>
        </li>
        <li className="item">
          <NavLink to="/salad">Экзотические САЛАТЫ</NavLink>
        </li>
        <li className="item">
          <NavLink to="/jam">Экзотические ДЖЕМЫ</NavLink>
        </li>
      </ul>
    </nav>
  );
};
