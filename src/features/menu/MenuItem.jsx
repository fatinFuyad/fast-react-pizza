import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex w-full gap-6 divide-y-2 divide-y-reverse divide-gray-400 sm:m-auto sm:w-4/6 lg:w-full">
      <img
        className={`${soldOut ? "grayscale" : ""}` + "h-28 w-28 self-center"}
        src={imageUrl}
        alt={name}
      />
      <div className="flex w-full flex-col gap-2 py-4">
        <p className="text-lg font-medium text-stone-700">{name}</p>
        <p className="text-sm capitalize">{ingredients.join(", ")}</p>
        <div className="mt-auto flex flex-col items-start justify-start gap-2 text-sm sm:flex-row sm:justify-between sm:gap-4">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          <Button
            type="small"
            style=" bg-green-700 text-gray-50 hover:bg-green-600 hover:ring-green-300 text-lg "
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
