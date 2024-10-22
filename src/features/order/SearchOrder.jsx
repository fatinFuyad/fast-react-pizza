import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto flex max-w-md basis-[340px] justify-center text-center sm:m-0 sm:w-full"
    >
      <input
        id="search-input"
        className="w-full rounded-full px-4 py-1.5 text-center transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50 sm:px-10 sm:focus:scale-x-110"
        placeholder="Search oder #"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
