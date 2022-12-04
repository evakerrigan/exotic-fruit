import { NavLink, useParams } from "react-router-dom";
import { ProductItem } from "../components/Product/ProductItem";
import productsData from "../json/products.json";

export const ProductDetailPage = () => {

  const { productId } = useParams();
  console.log("productId =", productId);

  const product = productsData.find(({id}) => id === productId);
  console.log("product:", product);

  return (
    <ProductItem product={product} />
  );
};
