import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartCost, setCartCost] = useState(0);
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
