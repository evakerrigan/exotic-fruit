import "./style/normalize.scss";
import "./style/reset.scss";
import "./App.scss";

import { useState } from "react";
import { ProductListPage } from "./pages/Product/ProductList";
import { ProductDetailPage } from "./pages/Product/ProductDetail";
import { CatalogItem } from "./components/CatalogItem/CatalogItem";
import { CatalogList } from "./components/CatalogList/CatalogList";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Delivery } from "./pages/Delivery/Delivery";
import { About } from "./pages/About/About";
import { Contacts } from "./pages/Contacts/Contacts";
import { BasketPage } from "./pages/BasketPage/BasketPage";

import { Route, Routes } from "react-router-dom";
import categoriesData from "./json/category.json";

import { initialBasketState } from "src/constants";
import { BasketState } from "./types/states/BasketState";
import { ProductDto } from "./types/dto/ProductDto";

export default function App() {

  const [basket, setBasket] = useState<BasketState>(initialBasketState);

  const addProductToBasket = (productId: ProductDto['id']) => {
    console.log("ткнули на плюс, productId =", productId);

    const initProductCount: number = basket.products[productId] || 0;
    setBasket({
      ...basket,
      products: {
        ...basket.products,
        [productId]: initProductCount + 1,
      },
    });
    console.log("basket =", basket);
  };

  const removeProductToBasket = (productId: ProductDto['id']) => {
    console.log("ткнули на минус, productId =", productId);

    const initProductCount: number = basket.products[productId] || 0;
    setBasket({
      ...basket,
      products: {
        ...basket.products,
        [productId]: initProductCount - 1
      }
    });
    console.log('basket =', basket);
  };

  return (
    <div className="App">
      <div className="wrapper-app">
        <Header />
        <NavBar />
        <Routes>
          <Route path="" element={<ProductListPage
            basket={basket} addProductToBasket={addProductToBasket}
            removeProductToBasket={removeProductToBasket} />} />
          <Route
            path="products/:productId"
            element={<ProductDetailPage
              basket={basket}
              addProductToBasket={addProductToBasket}
              removeProductToBasket={removeProductToBasket} />}
          />
          <Route
            path="products"
            element={<ProductListPage basket={basket} addProductToBasket={addProductToBasket}
              removeProductToBasket={removeProductToBasket} />}
          />
          <Route
            path="catalog/:catalogCode"
            element={
              <CatalogItem
                basket={basket}
                addProductToBasket={addProductToBasket}
                removeProductToBasket={removeProductToBasket}
              />
            }
          />
          <Route
            path="catalog"
            element={<CatalogList categories={categoriesData} />}
          />

          <Route path="delivery" element={<Delivery />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="basket" element={<BasketPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
