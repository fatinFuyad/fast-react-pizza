import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  // console.log(isLoadingIngredients);
  // console.log(ingredients);
  return (
    <li className="space-y-1 py-3">
      <div className="flex justify-between gap-8">
        <p className="pizza-name">
          <span>{quantity} &times;</span> {name}
        </p>
        <p className="font-semibold text-green-800">
          {formatCurrency(totalPrice)}
        </p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {
          isLoadingIngredients ? "Loading..." : ingredients?.join(", ")
          // in case ingredients not avaible then checking it is important
        }
      </p>
    </li>
  );
}

export default OrderItem;
