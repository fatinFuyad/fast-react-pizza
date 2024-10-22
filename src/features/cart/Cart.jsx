import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import ButtonLink from "../../ui/ButtonLink";
import Button from "../../ui/Button";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="p-6">
      <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>
      <h2 className="mt-10 text-2xl font-medium text-stone-700">
        Your cart, Fatin Fuyad
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
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
