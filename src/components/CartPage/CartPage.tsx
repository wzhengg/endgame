import { useCart } from "../../App";

const CartPage = () => {
  const { cart, setCart } = useCart();

  return (
    <div>
      {cart.map((item, i) => (
        <div key={i}>
          <div>{item.product.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
