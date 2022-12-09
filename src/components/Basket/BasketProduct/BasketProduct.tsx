import { ProductDTO } from "src/types";
import "./BasketProduct.css";

export interface BasketProductProps {
  productId: ProductDTO['id'];
  removeProduct: (productId: ProductDTO['id']) => void;
  addProduct: (productId: ProductDTO['id']) => void;
}

export const BasketProduct = ({
  removeProduct,
  addProduct,
  productId
}: BasketProductProps) => {
  return (
    <div>
      {/* <button onClick={() => addProductToBasket(productId)} className="basket-product">+</button> */}
      <div className="basket-product-wrapper">
        <div className="">
          <button
            className="basket-product-button"
            type="button"
            onClick={() => removeProduct(productId)}
          >
            -
          </button>
        </div>
        <input
          placeholder="0"
          type="text"
          name=""
          defaultValue="0"
          id=""
          className="basket-product-input"
          readOnly
        />
        <div className="">
          <button
            className="basket-product-button"
            type="button"
            onClick={() => addProduct(productId)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
