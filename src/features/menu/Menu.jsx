import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // we don't need to specify the loader that useLoaderData hook will call and return data from. It will use the loader associated with the route.
  const menu = useLoaderData();
  return (
    <ul className="grid gap-4 p-6 lg:grid-cols-2 lg:gap-x-16">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

// Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components.eslint(react-refresh/only-export-components)
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
