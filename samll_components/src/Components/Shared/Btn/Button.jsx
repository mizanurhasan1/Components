import React from "react";

/**
 *
 * @param {type} param1: type of button field
 * children : Button title
 * param3 : onClick , Method return value
 * customStyle : custom design class add
 * @returns
 */
const Button = ({
  children,
  type,
  onClick = () => {},
  customStyle,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={` uppercase ${customStyle} rounded tracking-[1px]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
