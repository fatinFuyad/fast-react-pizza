import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

MenuItem.propTypes = {
  pizza: PropTypes.object,
};
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <li className="flex w-full gap-6 divide-y-2 divide-y-reverse divide-gray-400 sm:m-auto sm:w-4/6 lg:w-full">
      <img
        className={
          `${soldOut ? "opacity-70 grayscale " : ""}` + "h-28 w-28 self-center"
        }
        src={imageUrl}
        alt={name}
      />
      <div className="flex w-full flex-col gap-2 py-4">
        <p className="pizza-name text-lg font-medium text-stone-900">{name}</p>
        <p className="ingredients text-sm capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between gap-4 max-[448px]:flex-col max-[448px]:items-start">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}

          {isInCart && (
            <>
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </>
          )}
          {!soldOut && !isInCart && (
            <Button
              type="small"
              style=" bg-green-700 text-gray-50 hover:bg-green-600 hover:ring-green-300 text-lg "
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
