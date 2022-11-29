import { useState, useEffect, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

class Product {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly price: number,
    readonly category: string,
    readonly images: string[]
  ) {}
}

const ProductsLayout = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
    []
  );

  const getProducts = async () => {
    try {
      const newProducts: Product[] = [];
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
      setProducts(newProducts);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-gray-100 p-20">
      <div className="grid grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center gap-3 pb-3 shadow-md rounded-md overflow-hidden"
          >
            <img
              src={product.images[0]}
              alt=""
              className="object-cover w-full h-52"
            />
            <h3 className="font-semibold tracking-widest text-gray-600">
              {product.name.toUpperCase()}
            </h3>
            <p className="text-sm tracking-wider text-gray-600">
              {formatter.format(product.price)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsLayout;
