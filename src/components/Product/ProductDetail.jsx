import "./Product.css";
import { NavLink, useParams } from "react-router-dom";
import { ProductItem } from "./ProductItem";

export const ProductDetail = ({ products }) => {

  const { productId } = useParams();
  console.log("productId =", productId);

  console.log("ProductDetail:products:", products);

  const product = products.find(({id}) => id === productId);
  console.log("product:", product);

  return (
    <ProductItem product={product} />
  );
};
