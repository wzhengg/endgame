import { ChangeEvent } from "react";

type Props = {
  onCategoryChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onMaxPriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSortChange: (e: ChangeEvent<HTMLInputElement>) => void;
  resetFilters: () => void;
};

const ProductFilters = (props: Props) => {
  const { onCategoryChange, onMaxPriceChange, onSortChange, resetFilters } =
    props;

  return (
    <form className="flex flex-col gap-10 text-gray-600 tracking-widest">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold mb-1">CATEGORY</h3>
        <div>
          <input
            type="checkbox"
            id="keyboards"
            name="category"
            value="keyboards"
            onChange={(e) => onCategoryChange(e)}
            className="mr-2"
          />
          <label htmlFor="keyboards">keyboards</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="switches"
            name="category"
            value="switches"
            onChange={(e) => onCategoryChange(e)}
            className="mr-2"
          />
          <label htmlFor="switches">switches</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="accessories"
            name="category"
            value="accessories"
            onChange={(e) => onCategoryChange(e)}
            className="mr-2"
          />
          <label htmlFor="accessories">accessories</label>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold mb-2">MAX PRICE</h3>
        <div className="flex items-center">
          <label htmlFor="maxPrice" className="mr-2">
            $
          </label>
          <input
            type="number"
            min={0}
            id="maxPrice"
            name="maxPrice"
            onChange={(e) => onMaxPriceChange(e)}
            className="tracking-wide border border-gray-500 px-2 py-1"
          />
        </div>
      </div>
      <fieldset className="flex flex-col gap-2">
        <legend className="font-bold mb-2">SORT</legend>
        <div>
          <input
            type="radio"
            id="AZ"
            name="sort"
            value="AZ"
            onChange={(e) => onSortChange(e)}
            className="mr-2"
          />
          <label htmlFor="AZ">alphabetically, a-z</label>
        </div>
        <div>
          <input
            type="radio"
            id="ZA"
            name="sort"
            value="ZA"
            onChange={(e) => onSortChange(e)}
            className="mr-2"
          />
          <label htmlFor="ZA">alphabetically, z-a</label>
        </div>
        <div>
          <input
            type="radio"
            id="priceAscending"
            name="sort"
            value="priceAscending"
            onChange={(e) => onSortChange(e)}
            className="mr-2"
          />
          <label htmlFor="priceAscending">price, low to high</label>
        </div>
        <div>
          <input
            type="radio"
            id="priceDescending"
            name="sort"
            value="priceDescending"
            onChange={(e) => onSortChange(e)}
            className="mr-2"
          />
          <label htmlFor="priceDescending">price, high to low</label>
        </div>
      </fieldset>
      <button
        type="reset"
        onClick={resetFilters}
        className="text-sm tracking-widest bg-white py-2 border border-gray-500"
      >
        CLEAR
      </button>
    </form>
  );
};

export default ProductFilters;
