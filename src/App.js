import "./style/normalize.css";
import "./style/reset.css";
import "./App.css";

import { FruitList } from "./components/Products/Fruit/Fruit";
import { JuiceList } from "./components/Products/Juice/Juice";
import { WineList } from "./components/Products/Wine/Wine";
import { SmoothiesList } from "./components/Products/Smoothies/Smoothies";
import { SaladList } from "./components/Products/Salad/Salad";
import { JamList } from "./components/Products/Jam/Jam";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import productsData from "./json/products.json";

function App() {
  return (
    <div className="App">
      <div className="wrapper-app">
        <Header />
        <NavBar />
        {/* <FruitList products={productsData} /> */}
        <Routes>
          <Route path="" element={<FruitList products={productsData} />} />
          <Route path="juice" element={<JuiceList />} />
          <Route path="wine" element={<WineList />} />
          <Route path="smoothies" element={<SmoothiesList />} />
          <Route path="salad" element={<SaladList />} />
          <Route path="jam" element={<JamList />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
