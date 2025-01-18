import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ClickableBackground } from "./styles/styleLibrary";
import { StyleButton } from "./components/SpinButton";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import CartCard from "./components/CartCard";
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

  const handleAddToCart = (newItem) => {
    if (newItem.quantity <= 0) return;
    const newCart = [];
    let isDuplicate = false;
    cart.forEach((item) => {
      if (item.id === newItem.id) {
        newItem.quantity = newItem.quantity + item.quantity;
        newCart.push(newItem);
        isDuplicate = true;
      } else newCart.push(item);
    });
    if (!isDuplicate) newCart.push(newItem);
    setCart(newCart);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavBar cart={calcCartQuantity} openCart={handleToggleSideBar} />
        {toggleSideBar && <ClickableBackground onClick={handleToggleSideBar} />}
        <Outlet context={{ handleAddToCart }} />

        <SideBar stateToggleOpen={toggleSideBar} onClick={handleToggleSideBar}>
          <>
            {cart.map((item) => {
              return (
                <CartCard
                  key={item.id}
                  title={item.title}
                  src={item.src}
                  id={item.id}
                  quantity={item.quantity}
                  price={item.price * item.quantity}
                />
              );
            })}
            <StyleButton>Checkout</StyleButton>
          </>
        </SideBar>
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
