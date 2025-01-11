import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ClickableBackground } from "./styles/styleLibrary";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  const [cart, setCart] = useState([]);
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const handleToggleSideBar = () => setToggleSideBar(!toggleSideBar);

  const handleAddToCart = (shopItem) => {
    if (shopItem.quantity <= 0) return;
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
      <NavBar cart={cart} openCart={handleToggleSideBar} />
      <Outlet context={{ handleToggleSideBar }} />
      {toggleSideBar && <ClickableBackground onClick={handleToggleSideBar} />}
      <SideBar
        stateToggleOpen={toggleSideBar}
        onClick={handleToggleSideBar}
      ></SideBar>
    </>
  );
}
import { useOutletContext } from "react-router-dom";
export default App;
