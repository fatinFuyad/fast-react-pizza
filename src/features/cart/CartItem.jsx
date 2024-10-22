import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex justify-between gap-8">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-5 sm:w-auto">
        <p className="font-semibold text-green-700">
          {formatCurrency(totalPrice)}
        </p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
