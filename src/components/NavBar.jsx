import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import "../styles/navBar.css";
import PropTypes from "prop-types";

const NavBar = ({ cart }) => {
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
        <p>Checkout: {`(${cart.length})`}</p>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default NavBar;
