import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 px-6 py-4 sm:px-0">
      <div className="flex flex-wrap justify-between text-lg text-stone-200 sm:m-auto sm:w-4/5">
        <p className="font-semibold text-stone-300">
          <span>23 pizzas</span>
          <span>$23.45</span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>
      </div>
    </div>
  );
}

export default CartOverview;
