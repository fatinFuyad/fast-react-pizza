import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.number,
  style: PropTypes.string,
  to: PropTypes.string,
};
function Button({ children, type, style, to }) {
  const baseStyle =
    "focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2 rounded-full bg-yellow-400 text-yellow-950 font-medium hover:bg-yellow-300  transition-color duration-300 ";
  const classStyle = {
    primary: baseStyle + " px-6 py-2 text-xl  " + style,
    secondary:
      "focus:outline-none  focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2 rounded-full text-stone-900 font-medium hover:bg-stone-300 transition-color duration-300 " +
      "border-2 border-stone-300  px-6 py-1.5 text-lg color-stone-50 " +
      style,

    small: baseStyle + " px-4 py-1 text-sm " + style,
  };

  if (to) {
    return (
      <Link to={to} className={classStyle[type]}>
        {children}
      </Link>
    );
  }
  return <button className={classStyle[type]}>{children}</button>;
}

export default Button;
