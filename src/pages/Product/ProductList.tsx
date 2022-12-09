import { BasketProductProps } from "src/components/Basket/BasketProduct/BasketProduct";
import { ProductList } from "../../components/Product/ProductList";
import productsData from "../../json/products.json";

interface ProductListPageProps {
  removeProductToBasket: BasketProductProps['removeProduct'];
  addProductToBasket: BasketProductProps['addProduct'];
}

export const ProductListPage = ({ addProductToBasket, removeProductToBasket }: ProductListPageProps) => {
  return (
    <ProductList
      products={productsData}
      addProductToBasket={addProductToBasket}
      removeProductToBasket={removeProductToBasket}
    />
  );
};