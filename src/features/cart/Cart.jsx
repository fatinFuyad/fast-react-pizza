import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import ButtonLink from "../../ui/ButtonLink";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  // const cart = fakeCart;
  const userName = useSelector((state) => state.user.userName);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="p-6">
      <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>
      <h2 className="mt-10 text-2xl font-medium text-stone-700">
        Your cart, {userName}
      </h2>
      <ul className="mt-8 flex flex-col gap-5">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-6">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
