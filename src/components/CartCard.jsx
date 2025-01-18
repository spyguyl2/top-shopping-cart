import PropTypes from "prop-types";
import styled from "styled-components";

const CartCard = ({ title, src, id, quantity, price }) => {
  return (
    <CartCardOuter id={id}>
      <img src={src}></img>
      <CartCardInner>
        <p>{title}</p>
        <CartCardNumbers>
          <p>Qty. {quantity}</p>
          <p>${price}</p>
        </CartCardNumbers>
      </CartCardInner>
    </CartCardOuter>
  );
};

export default CartCard;

const CartCardOuter = styled.div`
  display: flex;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
  height: 5rem;
  gap: 5px;
  img {
    width: 5rem;
  }
`;

const CartCardInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartCardNumbers = styled.div`
  display: flex;
  gap: 5rem;
`;

CartCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
