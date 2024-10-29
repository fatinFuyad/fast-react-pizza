import { useNavigate, useRouteError } from "react-router-dom";
import ButtonLink from "./ButtonLink";

function Error() {
  const navigate = useNavigate();
  /**
   * this will return an error object when an error happens while routing to a page that doesn't exist.
   * this will also return the error that happens when loading data from the fetch()
   * for route error, we need to use error.data and for the fetch error error.message
   */
  const error = useRouteError();
  console.log(error);
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-12 sm:py-16 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl">
          {error.data || error.message}
        </h1>
        <p className="text-gray-00 mt-6 text-center text-lg leading-7">
          Something went wrong. <br />
          Sorry, we couldn’t load the page.
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

export default Error;
