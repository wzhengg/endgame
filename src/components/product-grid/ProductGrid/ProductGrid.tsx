import { useMemo, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

type GridProps = {
  data: {
    category: string;
    products: {
      name: string;
      price: number;
      images: string[];
    }[];
  }[];
};

const ProductGrid = ({ data }: GridProps) => {
  const [index, setIndex] = useState(0);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
    []
  );

  return data.length !== 0 ? (
    <div className="flex flex-col items-center mx-80 my-20">
      <h3 className="text-base font-semibold tracking-widest text-gray-600 mb-6">
        FEATURED COLLECTIONS
      </h3>
      <div className="flex gap-3 mb-12">
        {data.map((obj, i) => (
          <button
            type="button"
            key={i}
            onClick={() => setIndex(i)}
            data-testid="category-btn"
            className={`text-sm font-medium tracking-widest text-gray-700 px-4 py-1.5 rounded-full ${
              index === i ? "bg-gray-100" : null
            }`}
          >
            {obj.category.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6">
        {data[index].products.map((product, i) => (
          <ProductCard product={product} formatter={formatter} key={i} />
        ))}
      </div>
    </div>
  ) : null;
};

export default ProductGrid;
