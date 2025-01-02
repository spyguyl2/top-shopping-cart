import PropTypes from "prop-types";
import SpinButton from "./SpinButton";
import "../styles/Card.css";

const Card = ({ title = "testTitle", spinButtonId, image, price }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={image} alt="" />
      <p>{price}</p>
      <SpinButton id={spinButtonId} />
      <button>Add To Cart</button>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  spinId: PropTypes.string.isRequired,
};

export default Card;
