import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Cart from "./features/cart/Cart";

/**
 * Since react router v6.4, we can now use some data loading fetching functionalities with createBrowserRouter function. This process is some different than the BrowserRouter
 * In this way we create a router object and then pass it to the RouterProvider Component
 * In BrowserRouter process, we can't laverage the data loading/fetching capabilities
 * For nested routes, we have to place them as object array element into the children array.
 * The AppLayout has no path because it is the layout route that will persist in the page and each child will be appeared when a child is navigated
 */

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order/:orderId", element: <Order /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
