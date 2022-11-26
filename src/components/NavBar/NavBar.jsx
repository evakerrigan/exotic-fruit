import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to=""><span className="nav-title-none">Экзотические</span> ФРУКТЫ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/juice"><span className="nav-title-none">Экзотические</span> СОКИ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/wine"><span className="nav-title-none">Аюрведические</span> ВИНА</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/smoothies"><span className="nav-title-none">Экзотические</span> СМУЗИ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/salad"><span className="nav-title-none">Экзотические</span> САЛАТЫ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/jam"><span className="nav-title-none">Экзотические</span> ДЖЕМЫ</NavLink>
        </li>
      </ul>
    </nav>
  );
};
