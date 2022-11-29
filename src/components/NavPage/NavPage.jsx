import "./NavPage.css";
import { NavLink } from "react-router-dom";

export const NavPage = () => {
  return (
    <div className="navpage">
      <ul className="navpage-list">
        <li className="navpage-item">
          <NavLink to="/">магазин</NavLink>
        </li>
        <li className="navpage-item">
          <NavLink to="/delivery">доставка</NavLink>
        </li>
        <li className="navpage-item">
          <NavLink to="/about">о нас</NavLink>
        </li>
        <li className="navpage-item">
          <NavLink to="/contacts">контакты</NavLink>
        </li>
      </ul>
    </div>
  );
};
