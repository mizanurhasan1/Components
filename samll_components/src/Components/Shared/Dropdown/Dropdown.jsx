import React from "react";
import { Select, Option } from "@material-tailwind/react";

/**
 *
 * @param {options} param1: arra of data,
 * param2 : customStyle Design of tailwind
 * param3 : onChange , Method return dropdown value
 * @returns
 */
const Dropdown = ({
  options = [],
  customStyle = {},
  onChange = () => {},
  value = "",
  label = "Select Item",
}) => {
  return (
    <div className={`w-full ${customStyle} `}>
      <Select
        color="gray"
        label={label}
        /**  e => return value of dropdown value */
        onChange={(e) => onChange(e)}
        value={value}
      >
        {options &&
          options.map((option, key) => (
            <Option className="" value={option} key={key}>
              {option}
            </Option>
          ))}
      </Select>
    </div>
  );
};

export default Dropdown;
