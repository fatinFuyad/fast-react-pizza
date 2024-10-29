import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  // if (!totalQuantity) return null; // when  there is no pizza selected
  return (
    <div
      className={`cart-overview bg-stone-800 px-6 py-4 sm:px-0 ${!totalQuantity ? "" : "visible"}`}
    >
      <div className="flex flex-wrap justify-between text-lg text-stone-200 sm:m-auto sm:w-4/5">
        <p className="font-semibold text-stone-300">
          <span>{totalQuantity} pizzas </span>
          <span> {formatCurrency(totalPrice)}</span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>
      </div>
    </div>
  );
}

export default CartOverview;
