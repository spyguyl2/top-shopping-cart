import { Link } from "react-router-dom";
import "../styles/navBar.css";
import { ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
    <div className="navBar">
      <h1>test</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
      </ul>
      <div className="cartButton">
        <ShoppingCart size={48}></ShoppingCart>
        <p>Checkout</p>
      </div>
    </div>
  );
};

export default NavBar;
