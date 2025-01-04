import { useState } from "react";
import PropTypes from "prop-types";
import SpinButton from "./SpinButton";
import "../styles/Card.css";

const Card = ({ title, spinButtonId, image, price, onClick }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="card">
      <h4>{title}</h4>
      <img src={image} alt="" />
      <p>{`$${price}`}</p>
      <SpinButton id={spinButtonId} quantityState={[quantity, setQuantity]} />
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
};

export default Card;
