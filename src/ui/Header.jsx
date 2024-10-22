import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 bg-yellow-400 px-6 py-4 max-[425px]:bg-orange-400 sm:gap-x-10 sm:px-10 lg:text-xl">
      <Link
        className="focus-outline m-auto text-center text-4xl tracking-[5px] text-stone-800 max-[368px]:w-full sm:m-0 md:text-4xl"
        to="/"
      >
        Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <p className="ml-auto hidden basis-48 text-center text-xl font-medium tracking-wider text-stone-700 sm:block lg:ml-0">
        Fatin Fuyad
      </p>
    </header>
  );
}

export default Header;
