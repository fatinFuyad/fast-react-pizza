import { useNavigate, useRouteError } from "react-router-dom";

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
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message} </p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
