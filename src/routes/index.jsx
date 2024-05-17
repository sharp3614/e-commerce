import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import Home from "../pages/home";
import Bag from "../pages/cart";
import ProductDetails from "../components/Products/ProductDetails";
import CartPage from "../pages/cart";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: "<NotFound />",
      },
    ],
  },
]);
export default routes;
