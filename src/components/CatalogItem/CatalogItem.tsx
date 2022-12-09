import "./CatalogItem.css";
import { useParams } from "react-router-dom";
import { ProductList } from "../Product/ProductList";
import productsData from "../../json/products.json";
import { BasketProductProps } from "../Basket/BasketProduct/BasketProduct";

interface CatalogItemProps {
  removeProductToBasket: BasketProductProps['removeProduct'];
  addProductToBasket: BasketProductProps['addProduct'];
}

export const CatalogItem = ({
  removeProductToBasket,
  addProductToBasket
}: CatalogItemProps) => {
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
      <ProductList products={listCatalogItem}
        removeProductToBasket={removeProductToBasket}
        addProductToBasket={addProductToBasket}
      />

    </div>
  );
};
