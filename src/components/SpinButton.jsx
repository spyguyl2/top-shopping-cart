import PropTypes from "prop-types";
import { Plus, Minus } from "lucide-react";
import "../styles/spinButton.css";


const SpinButton = ({
  id,
  text = "Quantity:",
  min,
  max,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleInputChange,
  quantity,
}) => {
  const handleFocus = () => event.target.select();

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
          onFocus={handleFocus}
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
  quantity: PropTypes.number,
  handleIncreaseQuantity: PropTypes.func,
  handleDecreaseQuantity: PropTypes.func,
  handleInputChange: PropTypes.func,
};

export default SpinButton;
