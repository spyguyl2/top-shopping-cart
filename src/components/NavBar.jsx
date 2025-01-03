import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import "../styles/navBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <h1>test</h1>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
      </ul>
      <div className="cartButton">
        <ShoppingCart size={48}></ShoppingCart>
        <p>Checkout {/*`(${cart})`*/}</p>
      </div>
    </div>
  );
};

export default NavBar;
