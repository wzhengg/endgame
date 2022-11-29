import { useState, useEffect, useMemo } from "react";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
};

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
      const querySnapshot = (await getDocs(
        collection(db, "products")
      )) as QuerySnapshot<{
        name: string;
        price: number;
        category: string;
        images: string[];
      }>;
      querySnapshot.forEach((doc) => {
        newProducts.push({ id: doc.id, ...doc.data() });
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
