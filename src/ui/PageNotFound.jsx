import { useNavigate } from "react-router-dom";
import ButtonLink from "./ButtonLink";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-4xl font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => navigate(-1)}
            className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            &larr; Go back
          </button>

          <ButtonLink to="/">
            Contact support <span aria-hidden="true">&rarr;</span>
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}

export default PageNotFound;
