import { useState, useEffect, useMemo, ChangeEvent } from "react";
import { Product, getProducts } from "../../api/products";
import ProductCard from "../ProductCard/ProductCard";

const ProductsLayout = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
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
    setFilters({ categories: new Set(), maxPrice: -1, sort: "" });
  };

  return (
    <div className="bg-gray-100 p-20">
      <form>
        <div>
          <input
            type="checkbox"
            id="keyboards"
            name="category"
            value="keyboards"
            onChange={(e) => onCategoryChange(e)}
          />
          <label htmlFor="keyboards">Keyboards</label>
          <input
            type="checkbox"
            id="switches"
            name="category"
            value="switches"
            onChange={(e) => onCategoryChange(e)}
          />
          <label htmlFor="switches">Switches</label>
          <input
            type="checkbox"
            id="accessories"
            name="category"
            value="accessories"
            onChange={(e) => onCategoryChange(e)}
          />
          <label htmlFor="accessories">Accessories</label>
        </div>
        <div>
          <input
            type="number"
            min={0}
            id="maxPrice"
            name="maxPrice"
            onChange={(e) => onMaxPriceChange(e)}
          />
          <label htmlFor="maxPrice">Max price</label>
        </div>
        <fieldset>
          <legend>Sort by</legend>
          <div>
            <input
              type="radio"
              id="AZ"
              name="sort"
              value="AZ"
              onChange={(e) => onSortChange(e)}
            />
            <label htmlFor="AZ">Alphabetically, A-Z</label>
          </div>
          <div>
            <input
              type="radio"
              id="ZA"
              name="sort"
              value="ZA"
              onChange={(e) => onSortChange(e)}
            />
            <label htmlFor="ZA">Alphabetically, Z-A</label>
          </div>
          <div>
            <input
              type="radio"
              id="priceAscending"
              name="sort"
              value="priceAscending"
              onChange={(e) => onSortChange(e)}
            />
            <label htmlFor="priceAscending">Price, low to high</label>
          </div>
          <div>
            <input
              type="radio"
              id="priceDescending"
              name="sort"
              value="priceDescending"
              onChange={(e) => onSortChange(e)}
            />
            <label htmlFor="priceDescending">Price, high to low</label>
          </div>
        </fieldset>
        <button type="reset" onClick={resetFilters}>
          Clear
        </button>
      </form>
      <div className="grid grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
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
