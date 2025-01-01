import PropTypes from "prop-types";
import SpinButton from "./SpinButton";
import "../styles/Card.css";
import { ShoppingCart } from "lucide-react";

const Card = ({ title = "testTitle", spinId }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <ShoppingCart size={164} />
      <SpinButton id={spinId} />
      <button>Add To Cart</button>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  spinId: PropTypes.string.isRequired,
};

export default Card;
