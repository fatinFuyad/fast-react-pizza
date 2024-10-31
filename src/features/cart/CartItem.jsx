import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="flex flex-wrap justify-between gap-x-8 gap-y-2">
      <p className="pizza-name basis-40">
        {quantity} &times; {name}
      </p>
      <div className="flex items-center justify-between gap-5 sm:w-auto">
        <p className="font-semibold text-green-700">
          {formatCurrency(totalPrice)}
        </p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
