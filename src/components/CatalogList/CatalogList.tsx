import { CategoryDto } from "src/types/dto/CategoryDto";
import "./CatalogList.css";
import { NavLink } from "react-router-dom";

interface CategoryListProps {
  categories: CategoryDto[];
}

export const CatalogList = ({ categories }: CategoryListProps) => {
  return (
    <div>
      <ul>
        {categories.map(({ code, typeName, name }: CategoryDto) => (
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
