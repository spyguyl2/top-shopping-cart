const SpinButton = ({ id, text = "Quantity:" }) => {
  return (
    <div className="spinContainerOuter">
      <label htmlFor={id}>{text}</label>
      <div className="spinContainerInner">
        <button>-</button>
        <input type="number" name={id} id={id} />
        <button>+</button>
      </div>
    </div>
  );
};

export default SpinButton;
