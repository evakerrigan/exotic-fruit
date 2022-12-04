import { ProductList } from "../components/Product/ProductList";
import productsData from "../json/products.json";

export const ProductListPage = () => {
  return (
    <ProductList products={productsData} />
  );
};