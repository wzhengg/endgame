import { useParams } from "react-router-dom";
import { Product, getProduct } from "../../api/products";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useCart } from "../../App";

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { cart, setCart } = useCart();

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
    []
  );

  useEffect(() => {
    getProduct(id!).then((data) => {
      setProduct(data);
    });
  }, [id]);

  const onDecrementQuantity = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };

  const onIncrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const onQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity < 1) {
      setQuantity(1);
      return;
    }
    setQuantity(newQuantity);
  };

  return product ? (
    <div className="flex-grow my-24 max-w-7xl self-center grid grid-cols-3">
      <img src={product.images[0]} alt="" className="col-span-2" />
      <div className="px-12 flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-gray-600 tracking-widest">
          {product.name.toUpperCase()}
        </h1>
        <div className="text-lg font-medium text-gray-600 tracking-widest">
          {formatter.format(product.price)}
        </div>
        <div className="flex">
          <button
            onClick={onDecrementQuantity}
            className="px-3 text-lg text-gray-500 border border-gray-300"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => onQuantityChange(e)}
            className="border-y border-y-gray-300 text-center"
          />
          <button
            onClick={onIncrementQuantity}
            className="px-3 text-lg text-gray-500 border border-gray-300"
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            const productIndex = cart.findIndex(
              (obj) => obj.product.id === product.id
            );

            if (productIndex < 0) {
              setCart((prev) => [...prev, { product, quantity }]);
              return;
            }

            const newQuantity = cart[productIndex].quantity + quantity;
            const newCart = cart.map((item, index) =>
              index === productIndex ? { ...item, quantity: newQuantity } : item
            );
            setCart(newCart);
          }}
          className="border-2 border-gray-600 py-4 font-medium tracking-wider"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  ) : (
    <div>LOADING</div>
  );
};

export default ProductPage;
