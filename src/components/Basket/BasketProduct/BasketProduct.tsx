import React from "react";
import { ProductDto } from "../../../types/dto/ProductDto";
import "./BasketProduct.css";

export interface BasketProductProps {
  productId: ProductDto['id'];
  productCount?: number;
  removeProduct: (productId: ProductDto['id']) => void;
  addProduct: (productId: ProductDto['id']) => void;
}

export const BasketProduct = ({
  removeProduct,
  addProduct,
  productId,
  productCount
}: BasketProductProps) => {
  return (
    <div>
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
        <span>{productCount || 0}</span>
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
