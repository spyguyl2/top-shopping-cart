import { useState } from "react";
import PropTypes from "prop-types";
import SpinButton from "./SpinButton";
import styled from "styled-components";
import { StyleButton } from "./SpinButton";
import { Heading } from "./NavBar";
import { useOutletContext } from "react-router-dom";

const Card = ({ title, spinButtonId, image, price, min = 0, max = 99 }) => {
  const [quantity, setQuantity] = useState(0);

  const { handleAddToCart } = useOutletContext();

  let shopItem = {
    title: title,
    price: price,
    quantity: quantity,
  };

  const onClickAddToCart = () => {
    shopItem.quantity = parseInt(quantity);
    handleAddToCart(shopItem);
  };

  const handleIncreaseQuantity = () => {
    quantity >= max
      ? setQuantity(max)
      : setQuantity((prevQuantity) => parseInt(prevQuantity + 1));
  };
  const handleDecreaseQuantity = () => {
    quantity <= min
      ? setQuantity(min)
      : setQuantity((prevQuantity) => parseInt(prevQuantity - 1));
  };

  const handleInputChange = (event) => {
    let newValue = event.target.value;
    if (newValue <= min) newValue = min;
    if (newValue >= max) newValue = max;
    if (newValue === "") newValue = 0;
    setQuantity(newValue);
  };

  return (
    <CardWrapper>
      <CardHeading as={"h4"}>{title}</CardHeading>
      <img src={image} alt="" />
      <CardHeading as={"p"}>{`$${price}`}</CardHeading>
      <SpinButton
        id={spinButtonId}
        min={min}
        max={max}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleInputChange={handleInputChange}
        quantity={parseInt(quantity)}
      />
      <StyleButton onClick={onClickAddToCart}>Add To Cart</StyleButton>
    </CardWrapper>
  );
};

const CardHeading = styled(Heading)`
  color: ${(props) => props.theme.secondary};
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem;
  width: 12rem;
  border: 1px solid purple;
  border-radius: 5px;
  background-color: ${(props) => props.theme.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  img {
    max-height: 10rem;
  }
`;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  spinButtonId: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default Card;
