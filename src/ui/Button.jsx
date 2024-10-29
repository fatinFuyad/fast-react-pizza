import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};
function Button({ children, type, disabled, style = "", to, onClick }) {
  const baseStyle =
    "focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-1 rounded-full bg-yellow-400 text-yellow-950 font-medium hover:bg-yellow-300 transition-color duration-300 ";
  const classStyle = {
    primary: baseStyle + " px-6 py-2 text-xl  min-w-[7rem] " + style,
    secondary:
      "focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-1 rounded-full text-stone-900 font-medium hover:bg-stone-300 transition-color duration-300 " +
      "border-2 border-stone-300 px-6 py-1.5 text-lg color-stone-50 min-w-[7rem] " +
      style,
    small: baseStyle + " px-4 py-1 text-sm  min-w-[7rem] " + style,
    round: baseStyle + " px-2.5  text-lg md:px-3 " + style,
  };

  if (to) {
    return (
      <Link to={to} className={classStyle[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        className={classStyle[type]}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button className={classStyle[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
