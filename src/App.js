import "./style/normalize.css";
import "./style/reset.css";
import "./App.css";

import { FruitList, FruitDetail } from "./components/Products/Fruit/Fruit";
import { CatalogItem } from "./components/Products/CatalogItem/CatalogItem";
import { CatalogList } from "./components/Products/CatalogList/CatalogList";
import { SmoothiesList } from "./components/Products/Smoothies/Smoothies";
import { SaladList } from "./components/Products/Salad/Salad";
import { JamList } from "./components/Products/Jam/Jam";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Delivery } from "./components/Delivery/Delivery";
import { About } from "./components/About/About";
import { Contacts } from "./components/Contacts/Contacts";

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
          <Route path="" element={<FruitList products={productsData} />} />
            <Route
              path="products/:productId"
              element={<FruitDetail products={productsData} />}
            />
          <Route
            path="products"
            element={<FruitList products={productsData} />}
          />
          <Route path="catalog/:catalogCode" element={<CatalogItem />} />
          <Route path="catalog" element={<CatalogList categories={categoriesData} />} />
          {/* <Route path="smoothies" element={<SmoothiesList />} />
          <Route path="salad" element={<SaladList />} />
          <Route path="jam" element={<JamList />} /> */}

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
