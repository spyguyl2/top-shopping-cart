import { Link } from "react-router-dom";
import "../styles/navBar.css";

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
        <img src="" alt="" />
        <p>Cart:</p>
      </div>
    </div>
  );
};

export default NavBar;
