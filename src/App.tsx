import React from "react";
import Header from "./components/Header/Header";
import ProductCarousel from "./components/carousel/ProductCarousel/ProductCarousel";
import "./App.scss";
import { carouselData } from "./components/carousel/CarouselData";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductCarousel data={carouselData} />
    </div>
  );
}

export default App;
