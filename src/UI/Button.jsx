import React from "react";

const Button = ({ buttonName, onClick }) => {
  return (
    <>
      <button
        className="border-0 rounded-md bg-blue-900 p-2 hover:bg-blue-600"
        onClick={onClick}
      >
        {buttonName}
      </button>
    </>
  );
};

export default Button;
