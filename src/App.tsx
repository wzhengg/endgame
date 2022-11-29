import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ProductCarousel from "./components/carousel/ProductCarousel/ProductCarousel";
import "./App.scss";
import ProductGrid from "./components/product-grid/ProductGrid/ProductGrid";
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

class CollectionObject {
  constructor(
    readonly id: string,
    readonly category: string,
    readonly products: { name: string; price: number; images: string[] }[]
  ) {}
}

function App() {
  const [carouselData, setCarouselData] = useState<CarouselObject[]>([]);
  const [collectionsData, setCollectionsData] = useState<CollectionObject[]>(
    []
  );

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

  const getFeaturedCollections = async () => {
    try {
      const newCollectionsData: CollectionObject[] = [];
      const querySnapshot = await getDocs(
        collection(db, "featured-collections")
      );
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        const data = doc.data();
        newCollectionsData.push(
          new CollectionObject(doc.id, data.category, data.products)
        );
      });
      setCollectionsData(newCollectionsData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCarouselData();
    getFeaturedCollections();
  }, []);

  return (
    <div className="App">
      <Header />
      <ProductCarousel data={carouselData} />
      <ProductGrid data={collectionsData} />
      <Footer />
    </div>
  );
}

export default App;
