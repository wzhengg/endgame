import { Outlet, useOutletContext } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { Dispatch, SetStateAction, useState } from "react";
import { Product } from "./api/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContext = {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
};

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <div className="App min-h-screen flex flex-col">
      <Header />
      <Outlet context={{ cart, setCart }} />
      <Footer />
    </div>
  );
}

export function useCart() {
  return useOutletContext<CartContext>();
}

export default App;
