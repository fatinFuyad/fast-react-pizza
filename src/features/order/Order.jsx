import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import store from "../../store";
import { clearCart } from "../cart/cartSlice";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

// Everyone can search for all orders, so for privacy reasons we're gonna exclude names or address, these are only for the restaurant staff

// Test ID: IIDSAT, W6PNSQ
function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();
  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );
  // console.log(fetcher);
  // console.log(fetcher.data);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="mt-6 grid gap-8 p-6">
      <div className="flex flex-wrap justify-between gap-x-6 gap-y-4">
        <h2 className="text-xl font-medium">Order status: {id} </h2>

        <div className="flex flex-wrap gap-4 text-lg uppercase text-white">
          {priority && (
            <span className="flex items-center rounded-full bg-red-500 px-4 py-0.5">
              Priority
            </span>
          )}
          <span className="flex items-center rounded-full bg-green-500 px-4 py-0.5">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex gap-x-8 bg-stone-200 px-4 py-4">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm text-stone-700">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="grid gap-4 divide-y divide-stone-500">
        {cart.map((item) => {
          return (
            <OrderItem
              key={item.pizzaId}
              item={item}
              isLoadingIngredients={fetcher.state === "loading"}
              ingredients={
                fetcher.data?.find((el) => el.id === item.pizzaId).ingredients
                // data might not be available at while loading, so checking it necessary
              }
            />
          );
        })}
      </ul>
      <div className="flex flex-col gap-2 bg-red-100 px-4 py-4 font-medium text-stone-800">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="text-xl font-semibold">
          To pay on delivery:{" "}
          <span className="text-green-800">
            {formatCurrency(orderPrice + priorityPrice)}
          </span>
        </p>
      </div>
      {!priority && (
        <div className="text-right">
          <UpdateOrder />
        </div>
      )}
    </div>
  );
}

// const { orderId } = useParams()
// The useParams hook can only be used inside a component but not in a regular function. we can't use useParams hook inside loader. But the loader will have the access the params as a parameter, where the orderId is a property of params.
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  // Not recommended. This could cause performance issues.
  store.dispatch(clearCart());
  return order;
}

export default Order;
