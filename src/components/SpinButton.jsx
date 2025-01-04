import PropTypes from "prop-types";
import { Plus, Minus } from "lucide-react";
import "../styles/spinButton.css";
import { useState } from "react";

const SpinButton = ({ id, text = "Quantity:", min = 0, max = 99 }) => {
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
    let newValue = parseInt(event.target.value);
    if (newValue <= min) newValue = min;
    if (newValue >= max) newValue = max;
    setQuantity(newValue);
  };

  return (
    <div className="spinContainerOuter">
      <label htmlFor={id}>{text}</label>
      <div className="spinContainerInner">
        <button aria-label="minus" onClick={handleDecreaseQuantity}>
          <Minus />
        </button>
        <input
          type="number"
          name={id}
          id={id}
          min={min}
          max={max}
          value={quantity}
          onChange={handleInputChange}
        />
        <button aria-label="plus" onClick={handleIncreaseQuantity}>
          <Plus />
        </button>
      </div>
    </div>
  );
};

SpinButton.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default SpinButton;
