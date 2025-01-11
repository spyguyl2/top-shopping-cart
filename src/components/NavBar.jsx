import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import PropTypes from "prop-types";
import styled from "styled-components";

const NavBar = ({ cart, openCart }) => {
  return (
    <NavBarWrapper>
      <h1>test</h1>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
      </ul>
      <CartButton onClick={openCart}>
        <ShoppingCart size={48}></ShoppingCart>
        <p>Checkout: {`(${cart.length})`}</p>
      </CartButton>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CartButton = styled.div`
  padding: 1rem;
`;

NavBar.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default NavBar;
