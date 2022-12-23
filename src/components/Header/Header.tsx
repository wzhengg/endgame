import { useContext } from "react";
import { Link } from "react-router-dom";
import AccountIcon from "../../assets/icons/account-outline.svg";
import CartIcon from "../../assets/icons/cart-outline.svg";
import { UserContext } from "../../App";

const Header = () => {
  const user = useContext(UserContext);

  return (
    <nav className="flex justify-between items-center px-9">
      <h1 className="text-xl font-semibold tracking-widest">
        <Link to="/">ENDGAME</Link>
      </h1>
      <ul className="flex gap-6">
        <li className="py-4 px-2 font-light tracking-wider">
          <Link to="products">PRODUCTS</Link>
        </li>
        <li className="py-4 px-2 font-light tracking-wider">UPDATES</li>
        <li className="py-4 px-2 font-light tracking-wider">SOCIALS</li>
        <li className="py-4 px-2 font-light tracking-wider">ABOUT US</li>
      </ul>
      <div className="flex gap-3">
        <Link to={user ? "profile" : "login"}>
          <img src={AccountIcon} alt="" className="w-6" />
        </Link>
        <Link to="cart">
          <img src={CartIcon} alt="" className="w-6" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
