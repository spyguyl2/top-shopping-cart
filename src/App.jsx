import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ClickableBackground } from "./styles/styleLibrary";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import styled from "styled-components";

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
    <Container>
      <NavBar cart={cart} openCart={handleToggleSideBar} />
      <Outlet context={{ handleToggleSideBar }} />
      {toggleSideBar && <ClickableBackground onClick={handleToggleSideBar} />}
      <SideBar
        stateToggleOpen={toggleSideBar}
        onClick={handleToggleSideBar}
      ></SideBar>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: rgb(98, 131, 149);
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
