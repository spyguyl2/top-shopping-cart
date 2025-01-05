import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (shopItem) => {
    const newItem = {
      title: shopItem.title,
      price: shopItem.price,
      quantity: shopItem.quantity,
    };
    const newCart = [...cart, newItem];
    setCart(newCart);
  };

  return (
    <>
      <NavBar cart={cart} />
      <Outlet />
    </>
  );
}

export default App;
