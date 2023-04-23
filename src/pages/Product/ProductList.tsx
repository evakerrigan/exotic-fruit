import { BasketProductProps } from "src/components/Basket/BasketProduct/BasketProduct";
import { BasketState } from "../../types/states/BasketState";
import { ProductList } from "../../components/Product/ProductList";
import productsData from "../../json/products.json";

interface ProductListPageProps {
  basket: BasketState;
  removeProductToBasket: BasketProductProps['removeProduct'];
  addProductToBasket: BasketProductProps['addProduct'];
}

export const ProductListPage = ({ basket, addProductToBasket, removeProductToBasket }: ProductListPageProps) => {
  return (
    <ProductList
      basket={basket}
      products={productsData}
      addProductToBasket={addProductToBasket}
      removeProductToBasket={removeProductToBasket}
    />
  );
};