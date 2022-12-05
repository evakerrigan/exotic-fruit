import "./Product.css";
import { NavLink } from "react-router-dom";
import { ProductItem } from "./ProductItem";
import { BasketProduct } from "../Basket/BasketProduct/BasketProduct";

export const ProductList = ({ products }) => {
  console.log("products:", products);
  return (
    <ul className="product-list">
      {products.map((product) => (
        <li className="product-item" key={product.id}>
          <NavLink to={`/products/${product.id}`}>
            <ProductItem product={product} />
          </NavLink>
          <BasketProduct productId={`${product.id}`} />
        </li>
      ))}
    </ul>
  );
};