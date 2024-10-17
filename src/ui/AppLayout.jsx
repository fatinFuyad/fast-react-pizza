import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "../ui/Loader";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <h1>Components</h1>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;

/**
 * The navigation is universal for tracking any loading state that happens in any of the component
 * navigation has three state "idle, loading, submitting"
 * So we can put the navigation in a common parent component or AppLayout
 */
