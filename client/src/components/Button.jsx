import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 
      px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 
      py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 
      bg-blue-500 hover:bg-blue-700 text-white font-bold 
      rounded transition ease-in duration-200 text-center"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
