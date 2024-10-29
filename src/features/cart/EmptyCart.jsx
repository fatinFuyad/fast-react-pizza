import ButtonLink from "../../ui/ButtonLink";

function EmptyCart() {
  return (
    <div className="mt-12 p-4 sm:px-6 sm:py-12">
      <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>
      <p className="mt-8 text-2xl">
        Your cart is still <span className="font-bold text-red-500">EMPTY</span>
        . Start adding some pizzas <span className="text-green-700">:)</span>
      </p>
    </div>
  );
}

export default EmptyCart;
