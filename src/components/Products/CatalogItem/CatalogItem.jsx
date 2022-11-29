import './CatalogItem.css';
import { NavLink, useParams } from "react-router-dom";

export const CatalogItem = () => {

  const qwer = useParams();

  return (
    <div>Проверка маршрутизации {JSON.stringify(qwer)}</div>
  )
  
}