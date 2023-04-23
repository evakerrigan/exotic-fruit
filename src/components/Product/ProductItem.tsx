import React from "react";
import { ProductDto } from "../../types/dto/ProductDto";
import "./Product.css";

interface ProductItemProps {
  product: ProductDto;
}

export const ProductItem = ({ product: { title, url } }: ProductItemProps) => {
  return (
    <div>
      <img
        className="product-image"
        src={url}
        alt={title}
      />
      <div className="product-title">{title}</div>
    </div>
  );
};