import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import categoriesData from "../../json/category.json";

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
      {categoriesData.map(({code, name, typeName}) => (
        <li className="nav-item" key={code}>
          <NavLink to={`/catalog/${code}`}><span className="nav-title-none">{typeName}</span> {name}</NavLink>
        </li>
      ))}
        {/* <li className="nav-item">
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
        </li> */}
      </ul>
    </nav>
  );
};
