import "./Product.css";
import { NavLink, useParams } from "react-router-dom";

export const ProductItem = ({ product: { title, url } }) => {
  return (
    <div>
      <img
        className="product-image"
        src={url}
      />
      <div className="product-title">{title}</div>
    </div>
  );
};