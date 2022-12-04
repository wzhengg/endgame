import { useState, useEffect, useMemo, ChangeEvent } from "react";
import { Product, getProducts } from "../../api/products";
import ProductFilters from "../ProductFilters/ProductFilters";
import ProductCard from "../ProductCard/ProductCard";

const ProductsLayout = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    query: "",
    categories: new Set(),
    maxPrice: -1,
    sort: "",
  });

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
    []
  );

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const filteredProducts = useMemo(() => {
    const newProducts = products.filter(
      (product) =>
        (filters.query.length === 0
          ? true
          : product.name.toLowerCase().includes(filters.query.toLowerCase())) &&
        (filters.categories.size === 0
          ? true
          : filters.categories.has(product.category)) &&
        (filters.maxPrice < 0 ? true : product.price <= filters.maxPrice)
    );

    if (filters.sort === "AZ") {
      newProducts.sort((a, b) => (a.name < b.name ? -1 : 1));
    } else if (filters.sort === "ZA") {
      newProducts.sort((a, b) => (a.name < b.name ? 1 : -1));
    } else if (filters.sort === "priceAscending") {
      newProducts.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "priceDescending") {
      newProducts.sort((a, b) => b.price - a.price);
    }

    return newProducts;
  }, [products, filters]);

  const onQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      query: e.target.value,
    }));
  };

  const onCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCategories = new Set();
    filters.categories.forEach((val) => newCategories.add(val));
    if (e.target.checked) newCategories.add(e.target.value);
    else newCategories.delete(e.target.value);
    setFilters((prev) => ({ ...prev, categories: newCategories }));
  };

  const onMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      maxPrice: e.target.value.length === 0 ? -1 : Number(e.target.value),
    }));
  };

  const onSortChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, sort: e.target.value }));
  };

  const resetFilters = () => {
    setFilters({ query: "", categories: new Set(), maxPrice: -1, sort: "" });
  };

  return (
    <div className="bg-gray-100 p-10">
      <div className="mb-10">
        <input
          type="text"
          id="search"
          placeholder="SEARCH"
          value={filters.query}
          onChange={(e) => onQueryChange(e)}
          className="w-full px-4 py-2 tracking-wide"
        />
        <label htmlFor="search"></label>
      </div>
      <div className="grid grid-cols-5 gap-10">
        <ProductFilters
          onCategoryChange={onCategoryChange}
          onMaxPriceChange={onMaxPriceChange}
          onSortChange={onSortChange}
          resetFilters={resetFilters}
        />
        <div className="col-span-4 grid grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              product={product}
              formatter={formatter}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
