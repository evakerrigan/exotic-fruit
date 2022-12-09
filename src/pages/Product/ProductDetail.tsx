import "./ProductDetail.css";
import { NavLink, useParams } from "react-router-dom";
import { BasketProduct, BasketProductProps } from "../../components/Basket/BasketProduct/BasketProduct";
// import { ProductItem } from "../components/Product/ProductItem";
import productsData from "../../json/products.json";
import { ProductDTO, TempAny } from "src/types";

interface ProductDetailPageProps {
  removeProductToBasket: BasketProductProps['removeProduct'];
  addProductToBasket: BasketProductProps['addProduct'];
}

export const ProductDetailPage = ({addProductToBasket,removeProductToBasket}: ProductDetailPageProps) => {
  const { productId } = useParams<{productId: string}>();
  console.log("productId =", productId);

  const product = productsData.find(({ id }) => id === productId);
  console.log("product:", product);

  if (!product) {
    return (<div>404</div>)
  }

  // const total = product.id * product.price;
  // TODO: calc total
  const total = product.price ;

  return (
    // <ProductItem product={product} />
    <div className="product-detail-wrapper">
      <img className="product-detail-image" src={product.url} />
      <div className="product-detail-description">
        <div className="product-detail-title">{product.title}</div>
        <div className="product-detail-container">
          <div className="product-detail-price">
            Цена: <span className="product-detail-amount">{product.price}</span>{" "}
            рублей
          </div>
          <div className="product-detail-basket">
            В корзине:
            <BasketProduct productId={`${product.id}`} addProduct={addProductToBasket}
                removeProduct={removeProductToBasket} />
            <span className="product-detail-amount">{product.id}</span> штук
          </div>
          <div className="product-detail-total">
            Итого: <span className="product-detail-amount">{total}</span> рублей
          </div>
        </div>
      </div>
    </div>
  );
};
