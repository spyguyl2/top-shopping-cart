import PropTypes from "prop-types";
import "../styles/spinButton.css";

const SpinButton = ({ id, text = "Quantity:", min = 0, max = 99 }) => {
  return (
    <div className="spinContainerOuter">
      <label htmlFor={id}>{text}</label>
      <div className="spinContainerInner">
        <button>-</button>
        <input type="number" name={id} id={id} min={min} max={max} />
        <button>+</button>
      </div>
    </div>
  );
};

SpinButton.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default SpinButton;
