import { TempAny } from "src/types";
import "./Product.css";

export const ProductItem = ({ product: { title, url } }: TempAny) => {
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