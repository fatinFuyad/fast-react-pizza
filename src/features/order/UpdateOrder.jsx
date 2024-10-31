import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();
  // console.log(order);
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}
// fetcher Form method should be "PATCH" or "PUT". For updating the whole object in the server use "PUT" and for updating a specific portion use "PATCH". If no method is defined then no request will be sent and action below will not work
export default UpdateOrder;

export async function action({ request, params }) {
  // console.log(request);
  // console.log(params);
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
