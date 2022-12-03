import "./CatalogItem.css";
import { useParams } from "react-router-dom";
import { ProductList } from "../Product/Product";
import productsData from "../../../json/products.json";

export const CatalogItem = () => {
  console.log("productsData =", productsData);

  const qwer = useParams();
  console.log("qwer =", qwer);

  const qwer2 = qwer.catalogCode;
  console.log("qwer2 =", qwer2);

  const listCatalogItem = productsData.filter(
    (product) => product.categoryCode === qwer2
  );

  console.log("listCatalogItem =", listCatalogItem);

  return (
    <div>
      <ProductList products={listCatalogItem} />
    </div>
  );
};
