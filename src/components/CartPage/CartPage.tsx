import { useContext, useEffect, useMemo, useState } from "react";
import { UserContext, useCart } from "../../App";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { PopulatedCartItem, populateCart, updateCart } from "../../api/cart";

const CartPage = () => {
  const [populatedCart, setPopulatedCart] = useState<PopulatedCartItem[]>([]);
  const { cart, setCart } = useCart();
  const user = useContext(UserContext);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
    []
  );

  useEffect(() => {
    populateCart(cart).then((populatedCart) => setPopulatedCart(populatedCart));
  }, [cart]);
  // useEffect(() => {
  //   if (user) {
  //     const unsub = onSnapshot(doc(db, "users", user!.uid), (doc) => {
  //       updateCart();
  //       const data = doc.data();
  //       const newCart = data!.cart;
  //       setCart(newCart);
  //     });

  //     return () => unsub();
  //   }
  // }, [user, setCart, updateCart]);

  // useEffect(() => {
  //   if (user) {
  //     updateCart(user.uid, cart);
  //   }
  // });

  return cart.length ? (
    <div className="max-w-4xl self-center grow my-10">
      <h1 className="text-3xl font-semibold text-gray-700 tracking-widest mb-10">
        YOUR CART
      </h1>
      {populatedCart.map((obj) => {
        const product = obj.product!;
        return (
          <div
            key={product.id}
            className="grid grid-cols-3 auto-rows-max gap-3 mb-3"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="object-cover"
            />
            <div className="col-span-2 justify-self-end text-end">
              <h4 className="text-sm font-medium text-gray-600 tracking-wider">
                {product.name.toUpperCase()}
              </h4>
              <p className="text-sm font-medium text-gray-600 tracking-wider">
                QUANTITY: {obj.quantity}
              </p>
              <p className="text-sm font-medium text-gray-600 tracking-wider">
                PRICE: {formatter.format(product.price * obj.quantity)}
              </p>
              <button
                type="button"
                onClick={() => {
                  const newCart = cart.filter(
                    (obj) => obj.productId !== product.id
                  );
                  setCart(newCart);
                }}
                className="text-sm font-medium text-red-500 tracking-wider"
              >
                REMOVE
              </button>
            </div>
          </div>
        );
      })}
      <hr className="mb-3" />
      <div className="flex flex-col items-end gap-6">
        <div className="text-end font-medium text-gray-600 tracking-wider">
          {"TOTAL PRICE: "}
          {formatter.format(
            populatedCart.reduce(
              (total, item) => (total += item.quantity * item.product!.price),
              0
            )
          )}
        </div>
        <button
          type="button"
          className="font-medium text-gray-600 tracking-wider px-8 py-4 border-2 border-gray-600"
        >
          CHECK OUT
        </button>
      </div>
    </div>
  ) : (
    <div className="grow text-xl font-semibold text-gray-600 tracking-wider text-center my-16">
      THERE ARE NO ITEMS IN YOUR CART
    </div>
  );
};

export default CartPage;
