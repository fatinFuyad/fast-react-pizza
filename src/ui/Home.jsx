import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="m-auto mt-7 px-4 text-center">
      <h1 className="mb-3 text-4xl font-semibold text-stone-700">
        The best pizza.
      </h1>
      <p className="mb-12 text-2xl font-semibold text-yellow-500">
        Straight out of the oven, straight to you.
      </p>
      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue Ordering, {userName}
        </Button>
      )}
    </div>
  );
}

export default Home;
