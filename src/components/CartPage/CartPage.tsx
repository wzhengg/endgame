import { useCart } from "../../App";

const CartPage = () => {
  const { cart, setCart } = useCart();

  return (
    <div>
      {cart.map((item) => (
        <div key={item.product.id}>
          {item.product.name}, {item.quantity}
          <button
            type="button"
            onClick={() => {
              const newCart = cart.filter(
                (obj) => obj.product.id !== item.product.id
              );
              setCart(newCart);
            }}
          >
            REMOVE
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
