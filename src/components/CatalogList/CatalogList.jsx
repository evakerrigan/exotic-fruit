import "./CatalogList.css";
import { NavLink } from "react-router-dom";

export const CatalogList = ({ categories }) => {
  return (
    <div>
      <ul>
        {categories.map(({ code, typeName, name }) => (
          <li key={code}>
            <NavLink to={`/catalog/${code}`}>
              <span className="nav-title-none">{typeName}</span> {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
