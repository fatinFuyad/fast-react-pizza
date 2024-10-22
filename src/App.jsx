import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Cart from "./features/cart/Cart";
import Error from "./ui/Error";
import PageNotFound from "./ui/PageNotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <PageNotFound />,
        loader: menuLoader,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/**
 * Since react router v6.4, we can now use some data loading fetching functionalities with createBrowserRouter function. This process is some different than the BrowserRouter
 * In this way we create a router object and then pass it to the RouterProvider Component
 * In BrowserRouter process, we can't laverage the data loading/fetching capabilities
 * For nested routes, we have to place them as object array element into the children array.
 * The AppLayout has no path because it is the layout route that will persist in the page and each child will be appeared when a child is navigated
 *
 * The error that occurs in any of the component will bubble up the the parent component, in this case the AppLayout.
 * That's why we can handle error in the parent component.
 * but also it's better to handle error right in the component
 */
