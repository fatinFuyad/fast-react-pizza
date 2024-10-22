import PropTypes from "prop-types";
import { Link } from "react-router-dom";

ButtonLink.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
};

function ButtonLink({ children, to }) {
  return (
    <Link
      className="rounded-full px-4 py-2 text-lg font-medium capitalize text-blue-600 transition-colors duration-300 hover:bg-blue-200/80 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed"
      to={to}
    >
      {children}
    </Link>
  );
}

export default ButtonLink;
