import "./CatalogItem.css";
import { useParams } from "react-router-dom";
import { ProductList } from "../Product/ProductList";
import productsData from "../../json/products.json";

export const CatalogItem = () => {
  console.log("productsData =", productsData);

  const { catalogCode } = useParams();
  // const urlParams = useParams();
  // catalogCode = urlParams.catalogCode;

  console.log("catalogCode =", catalogCode);

  const listCatalogItem = productsData.filter(
    (product) => product.categoryCode === catalogCode
  );

  console.log("listCatalogItem =", listCatalogItem);

  return (
    <div>
      <ProductList products={listCatalogItem} />
    </div>
  );
};
