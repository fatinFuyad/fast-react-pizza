import CreateUser from "../features/user/CreateUser";
function Home() {
  return (
    <div className="m-auto mt-7 px-4 text-center">
      <h1 className="mb-3 text-4xl font-semibold text-stone-700">
        The best pizza.
      </h1>
      <p className="text-2xl font-semibold text-yellow-500">
        Straight out of the oven, straight to you.
      </p>
      <CreateUser />
    </div>
  );
}

export default Home;
