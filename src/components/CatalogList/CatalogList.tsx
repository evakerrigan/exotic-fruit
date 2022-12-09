import "./CatalogList.css";
import { NavLink } from "react-router-dom";
import { TempAny } from "src/types";

export const CatalogList = ({ categories }: TempAny) => {
  return (
    <div>
      <ul>
        {categories.map(({ code, typeName, name }: TempAny) => (
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
