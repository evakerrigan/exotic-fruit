import "./ProductDetail.css";
import { NavLink, useParams } from "react-router-dom";
import { BasketProduct } from "../../components/Basket/BasketProduct/BasketProduct";
// import { ProductItem } from "../components/Product/ProductItem";
import productsData from "../../json/products.json";

export const ProductDetailPage = () => {
  const { productId } = useParams();
  console.log("productId =", productId);

  const product = productsData.find(({ id }) => id === productId);
  console.log("product:", product);

  const total = product.id * product.price;

  return (
    // <ProductItem product={product} />
    <div className="product-detail-wrapper">
      <img className="product-detail-image" src={product.url} />
      <div className="product-detail-description">
        <div className="product-detail-title">{product.title}</div>
        <div className="product-detail-price">
          Цена: <span className="product-detail-amount">{product.price}</span>{" "}
          рублей
        </div>
        <div className="product-detail-basket">
          В корзине:
          <BasketProduct productId={`${product.id}`} />
          <span className="product-detail-amount">{product.id}</span> штук
        </div>

        <div className="product-detail-total">
          Итого: <span className="product-detail-amount">{total}</span> рублей
        </div>
      </div>
    </div>
  );
};
