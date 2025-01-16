import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ClickableBackground } from "./styles/styleLibrary";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { styled, ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  const [cart, setCart] = useState([]);
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const handleToggleSideBar = () => setToggleSideBar(!toggleSideBar);

  const calcCartQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total = item.quantity + total;
    });
    return total;
  };

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
    <ThemeProvider theme={theme}>
      <Container>
        <NavBar cart={calcCartQuantity} openCart={handleToggleSideBar} />
        {toggleSideBar && <ClickableBackground onClick={handleToggleSideBar} />}
        <Outlet context={{ handleAddToCart }} />

        <SideBar
          stateToggleOpen={toggleSideBar}
          onClick={handleToggleSideBar}
        ></SideBar>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
