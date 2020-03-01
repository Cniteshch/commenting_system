import React from "react";

const ButtonComponent = ({ onClickFunction, label }) => {
  const onClickFunctionHandler = () => {
    if (onClickFunction) {
      onClickFunction();
    }
  };
  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => onClickFunctionHandler()}
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonComponent;
