import { Outlet, useOutletContext } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { CartItem } from "./api/cart";

export const UserContext = createContext<User | null>(null);

type CartContext = {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
};

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const auth = useMemo(() => getAuth(), []);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });

  return (
    <div className="App min-h-screen flex flex-col">
      <UserContext.Provider value={user}>
        <Header />
        <Outlet context={{ cart, setCart }} />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export function useCart() {
  return useOutletContext<CartContext>();
}

export default App;
