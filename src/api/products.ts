import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

export class CarouselObject {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly description: string,
    readonly image: string
  ) {}
}

export class CollectionObject {
  constructor(
    readonly id: string,
    readonly category: string,
    readonly products: { name: string; price: number; images: string[] }[]
  ) {}
}

export class Product {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly price: number,
    readonly category: string,
    readonly images: string[]
  ) {}
}

export async function getCarouselData() {
  const newCarouselData: CarouselObject[] = [];

  try {
    const querySnapshot = await getDocs(collection(db, "carousel-data"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      newCarouselData.push(
        new CarouselObject(doc.id, data.name, data.description, data.image)
      );
    });
  } catch (err) {
    console.error(err);
  }

  return newCarouselData;
}

export async function getFeaturedCollections() {
  const newCollectionsData: CollectionObject[] = [];

  try {
    const querySnapshot = await getDocs(collection(db, "featured-collections"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      newCollectionsData.push(
        new CollectionObject(doc.id, data.category, data.products)
      );
    });
  } catch (err) {
    console.error(err);
  }

  return newCollectionsData;
}

export async function getProducts() {
  const newProducts: Product[] = [];

  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      const product = doc.data();
      newProducts.push(
        new Product(
          doc.id,
          product.name,
          product.price,
          product.category,
          product.images
        )
      );
    });
  } catch (err) {
    console.error(err);
  }

  return newProducts;
}
