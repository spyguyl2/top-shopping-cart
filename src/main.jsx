import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { element } from "prop-types";
import Shop from "./components/Shop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
