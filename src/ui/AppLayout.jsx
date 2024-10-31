import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "../ui/Loader";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-y-scroll">
        <main className="lg:mx-auto lg:w-10/12 xl:w-[1024px]">
          <Outlet />
        </main>
      </div>
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
