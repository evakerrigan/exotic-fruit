import "./Product.css";
import { NavLink } from "react-router-dom";
import { ProductItem } from "./ProductItem";
import { BasketProduct } from "../Basket/BasketProduct/BasketProduct";
import { TempAny } from "src/types";

export const ProductList = ({ products }: TempAny) => {
  console.log("products:", products);
  return (
    <ul className="product-list">
      {products.map((product: TempAny) => (
        <li className="product-item" key={product.id}>
          <NavLink to={`/products/${product.id}`}>
            <ProductItem product={product} />
          </NavLink>
          <div className="product-properties">
            <div className="product-price">{product.price}</div>
            <BasketProduct productId={`${product.id}`} />
          </div>
        </li>
      ))}
    </ul>
  );
};
