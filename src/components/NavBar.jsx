import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import PropTypes from "prop-types";
import styled from "styled-components";

const NavBar = ({ cart, openCart }) => {
  return (
    <NavBarWrapper>
      <Heading>E-Commerce</Heading>
      <StyledList>
        <li>
          <StyledLink to="home">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="shop">Shop</StyledLink>
        </li>
      </StyledList>
      <CartCircle onClick={openCart}>
        <CartButton>
          <ShoppingCart size={32} />
        </CartButton>
        <CartNumber>{cart()}</CartNumber>
      </CartCircle>
    </NavBarWrapper>
  );
};

export const Heading = styled.h1`
  color: ${(props) => props.theme.primary};
`;

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.5rem;
`;

const CartNumber = styled.h2`
  position: absolute;
  color: ${(props) => props.theme.background};
  cursor: pointer;
`;

const CartCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.secondary};
`;

const CartButton = styled.div`
  position: relative;
  padding: 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.primary};
  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
  border: 1px ${(props) => props.theme.tertiary} solid;
  padding: 0.5rem;
  border-radius: 24px;
  font-weight: bold;
  &:hover {
    color: ${(props) => props.theme.secondary};
    background-color: ${(props) => props.theme.primary};
  }
`;

const StyledList = styled.ul`
  display: flex;
  gap: 2rem;
`;

NavBar.propTypes = {
  cart: PropTypes.func.isRequired,
  openCart: PropTypes.func.isRequired,
};

export default NavBar;
