import { useState, useEffect, useMemo } from "react";
import { Product, getProducts } from "../../api/products";
import ProductCard from "../product-grid/ProductCard/ProductCard";

const ProductsLayout = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
    []
  );

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="bg-gray-100 p-20">
      <div className="grid grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard
            product={product}
            formatter={formatter}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsLayout;
