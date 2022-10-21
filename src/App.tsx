import React from "react";
import Header from "./components/Header/Header";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductCarousel />
    </div>
  );
}

export default App;
