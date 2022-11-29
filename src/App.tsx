import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ProductCarousel from "./components/carousel/ProductCarousel/ProductCarousel";
import "./App.scss";
import ProductGrid from "./components/product-grid/ProductGrid/ProductGrid";
import { products } from "./components/product-grid/FeaturedProducts";
import Footer from "./components/Footer/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

class CarouselObject {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly description: string,
    readonly image: string
  ) {}
}

function App() {
  const [carouselData, setCarouselData] = useState<CarouselObject[]>([]);

  const getCarouselData = async () => {
    try {
      const newCarouselData: CarouselObject[] = [];
      const querySnapshot = await getDocs(collection(db, "carousel-data"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        newCarouselData.push(
          new CarouselObject(doc.id, data.name, data.description, data.image)
        );
      });
      setCarouselData(newCarouselData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCarouselData();
  }, []);

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
