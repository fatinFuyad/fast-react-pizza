// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";

// Everyone can search for all orders, so for privacy reasons we're gonna exclude names or address, these are only for the restaurant staff

function Order() {
  const order = useLoaderData();
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
        <h2 className="text-xl font-medium">Order #IIDSAT Status</h2>

        <div className="flex gap-4 text-lg uppercase text-white">
          {priority && (
            <span className="flex items-center rounded-full bg-red-600 px-4 py-0.5">
              Priority
            </span>
          )}
          <span className="flex items-center rounded-full bg-green-700 px-4 py-0.5">
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
          return <OrderItem key={item.id} item={item} />;
        })}
      </ul>
      <div className="flex flex-col gap-2 bg-orange-200/80 px-4 py-4 font-medium text-stone-800">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

// const { orderId } = useParams()
// The useParams hook can only be used inside a component but not in a regular function. we can't use useParams hook inside loader. But the loader will have the access the params as a parameter, where the orderId is a property of params.
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
