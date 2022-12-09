import "./Product.css";
import { NavLink } from "react-router-dom";
import { ProductItem } from "./ProductItem";
import { BasketProduct, BasketProductProps } from "../Basket/BasketProduct/BasketProduct";
import { BasketState, ProductDTO } from "src/types";

interface ProductListProps {
  basket: BasketState;
  products: ProductDTO[];
  removeProductToBasket: BasketProductProps['removeProduct'];
  addProductToBasket: BasketProductProps['addProduct'];
}

export const ProductList = ({ basket, products, removeProductToBasket, addProductToBasket }: ProductListProps) => {
  console.log("products:", products);
  return (
    <ul className="product-list">
      {products.map((product) => (
        <li className="product-item" key={product.id}>
          <NavLink to={`/products/${product.id}`}>
            <ProductItem product={product} />
          </NavLink>
          <div className="product-properties">
            <div className="product-price">{product.price}</div>
            <BasketProduct
              productCount={basket.products[product.id]}
              productId={product.id}
              removeProduct={removeProductToBasket}
              addProduct={addProductToBasket}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
