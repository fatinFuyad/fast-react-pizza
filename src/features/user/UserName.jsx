import { useSelector } from "react-redux";
function UserName() {
  const userName = useSelector((state) => state.user.userName);
  if (!userName) return null;
  return (
    <div className="ml-auto hidden basis-48 text-center text-xl font-medium tracking-wider text-stone-700 transition-all duration-300 sm:block lg:ml-0">
      {userName}
    </div>
  );
}

export default UserName;
