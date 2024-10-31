import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 bg-yellow-400 px-6 py-4 max-[425px]:bg-yellow-300 sm:gap-x-10 sm:px-10 lg:text-xl">
      <Link
        className="focus-outline m-auto px-1 py-1 text-center text-4xl tracking-[5px] text-stone-800 hover:ring-4 hover:ring-yellow-600 max-[368px]:w-full sm:m-0 md:text-4xl"
        to="/"
      >
        Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
