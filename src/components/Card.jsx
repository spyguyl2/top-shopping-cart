import { useState } from "react";
import PropTypes from "prop-types";
import SpinButton from "./SpinButton";
import "../styles/Card.css";

const Card = ({
  title,
  spinButtonId,
  image,
  price,
  onClick,
  min = 0,
  max = 99,
}) => {
  const [quantity, setQuantity] = useState(0);

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
    <div className="card">
      <h4>{title}</h4>
      <img src={image} alt="" />
      <p>{`$${price}`}</p>
      <SpinButton
        id={spinButtonId}
        min={min}
        max={max}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleInputChange={handleInputChange}
        quantity={quantity}
      />
      <button onClick={onClick}>Add To Cart</button>
    </div>
  );
};

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
