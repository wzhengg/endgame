import { useState, useEffect } from "react";
import ProductCarousel from "../carousel/ProductCarousel/ProductCarousel";
import ProductGrid from "../product-grid/ProductGrid/ProductGrid";
import {
  CarouselObject,
  CollectionObject,
  getCarouselData,
  getFeaturedCollections,
} from "../../api/products";

const HomeLayout = () => {
  const [carouselData, setCarouselData] = useState<CarouselObject[]>([]);
  const [collectionsData, setCollectionsData] = useState<CollectionObject[]>(
    []
  );

  useEffect(() => {
    getCarouselData().then((data) => setCarouselData(data));
    getFeaturedCollections().then((data) => setCollectionsData(data));
  }, []);

  return (
    <>
      <ProductCarousel data={carouselData} />
      <ProductGrid data={collectionsData} />
    </>
  );
};

export default HomeLayout;
