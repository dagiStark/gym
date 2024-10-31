import PropTypes from "prop-types";

function Input({ type, id, name, placeholder, className, value, onChange }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={`w-full h-11 bg-transparent border border-gray-500 outline-none px-3 focus:outline-none focus:border-indigo-600 rounded-md text-base text-gray-200 font-medium  ${className}`}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
