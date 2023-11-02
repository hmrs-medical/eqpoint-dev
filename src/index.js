import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import Contact from "./components/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/products/bloodbank",
    element: <Products minimize={true} category="bloodbank" />,
  },
  {
    path: "/products/laboratory",
    element: <Products minimize={true} category="laboratory" />,
  },
  {
    path: "/products/research",
    element: <Products minimize={true} category="research" />,
  },
  {
    path: "/products/coldchain",
    element: <Products minimize={true} category="coldchain" />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
