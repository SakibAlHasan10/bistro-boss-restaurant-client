import PropTypes from "prop-types";
const Button = ({ handleAddCArd, children }) => {
  return (
    <div className="text-center">
      <button
        onClick={handleAddCArd}
        className="  rounded-md px-6 py-2 text-xl border-b-2 uppercase hover:text-yellow-400 hover:border-yellow-400"
      >
        {children}
      </button>
    </div>
  );
};
Button.propTypes = {
  children: PropTypes.string,
  handleAddCArd: PropTypes.func,
};
export default Button;
