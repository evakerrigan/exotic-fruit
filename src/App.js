import "./style/normalize.css";
import "./style/reset.css";
import "./App.css";

import { ProductList } from "./components/Product/ProductList";
import { ProductDetail } from "./components/Product/ProductDetail";
import { CatalogItem } from "./components/CatalogItem/CatalogItem";
import { CatalogList } from "./components/CatalogList/CatalogList";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Delivery } from "./pages/Delivery/Delivery";
import { About } from "./pages/About/About";
import { Contacts } from "./pages/Contacts/Contacts";

import { Route, Routes } from "react-router-dom";
import productsData from "./json/products.json";
import categoriesData from "./json/category.json";

function App() {
  return (
    <div className="App">
      <div className="wrapper-app">
        <Header />
        <NavBar />
        <Routes>
          <Route path="" element={<ProductList products={productsData} />} />
          <Route
            path="products/:productId"
            element={<ProductDetail products={productsData} />}
          />
          <Route
            path="products"
            element={<ProductList products={productsData} />}
          />
          <Route path="catalog/:catalogCode" element={<CatalogItem />} />
          <Route
            path="catalog"
            element={<CatalogList categories={categoriesData} />}
          />

          <Route path="delivery" element={<Delivery />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
