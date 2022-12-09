import "./CatalogItem.css";
import { useParams } from "react-router-dom";
import { ProductList } from "../Product/ProductList";
import productsData from "../../json/products.json";
import { BasketProductProps } from "../Basket/BasketProduct/BasketProduct";
import { BasketState } from "src/types";

interface CatalogItemProps {
  basket: BasketState;
  removeProductToBasket: BasketProductProps['removeProduct'];
  addProductToBasket: BasketProductProps['addProduct'];
}

export const CatalogItem = ({
  basket,
  removeProductToBasket,
  addProductToBasket
}: CatalogItemProps) => {
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
      <ProductList 
      basket={basket}
      products={listCatalogItem}
        removeProductToBasket={removeProductToBasket}
        addProductToBasket={addProductToBasket}
      />

    </div>
  );
};
