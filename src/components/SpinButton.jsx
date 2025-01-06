import PropTypes from "prop-types";
import { Plus, Minus } from "lucide-react";
import styled from "styled-components";

const SpinContainerOuter = styled.div`
  display: flex
  flex-direction: column;
  align-items: center;
  `;

const SpinContainerInner = styled.div`
  display: flex;
  height: 2rem;
  margin-bottom: 0.2rem;
`;

const StyleButton = styled.button`
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: rgb(62, 166, 195);
    transform: translateY(4px);
  }
`;

const StyleSpinInput = styled.input`
  margin: 0 0.2rem;
  border-radius: 12px;
  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;

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
  const handleFocus = (event) => event.target.select();

  return (
    <SpinContainerOuter>
      <label htmlFor={id}>{text}</label>
      <SpinContainerInner>
        <StyleButton aria-label="minus" onClick={handleDecreaseQuantity}>
          <Minus />
        </StyleButton>
        <StyleSpinInput
          type="number"
          name={id}
          id={id}
          min={min}
          max={max}
          value={quantity}
          onFocus={handleFocus}
          onChange={handleInputChange}
        />
        <StyleButton aria-label="plus" onClick={handleIncreaseQuantity}>
          <Plus />
        </StyleButton>
      </SpinContainerInner>
    </SpinContainerOuter>
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
