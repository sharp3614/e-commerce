import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import Home from "../pages/home";
import Bag from "../pages/bag";
import ProductDetails from "../components/Products/ProductDetails";

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
        path: "bag",
        element: <Bag />,
      },
      {
        path: "*",
        element: "<NotFound />",
      },
    ],
  },
]);
export default routes;
