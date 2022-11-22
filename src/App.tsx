import React from "react";
import Header from "./components/Header/Header";
import ProductCarousel from "./components/carousel/ProductCarousel/ProductCarousel";
import "./App.scss";
import { carouselData } from "./components/carousel/CarouselData";
import ProductGrid from "./components/product-grid/ProductGrid/ProductGrid";
import { products } from "./components/product-grid/FeaturedProducts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductCarousel data={carouselData} />
      <ProductGrid data={products} />
      <Footer />
    </div>
  );
}

export default App;
