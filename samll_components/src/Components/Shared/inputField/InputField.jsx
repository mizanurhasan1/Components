import React from "react";
import styles from "./InputField.module.css";

/**
 *
 * @param {type} param1: type of input field
 * label : label of input field
 * style : custom design class add
 * register: validation object of form validator
 *
 * @returns
 */

const InputField = ({
  label,
  type,
  value = "",
  disable = false,
  autoFocus = false,
  register = {},
  customStyle = {},
}) => {
  return (
    <>
      <div className={`${styles.inputDiv}  w-full`}>
        <input
          type={type || "text"}
          autoFocus={autoFocus}
          disabled={disable}
          className={`${styles.customInput}  w-full ${customStyle}`}
          placeholder=" "
          defaultValue={value}
          {...register}
        />
        <label className={styles.customLabel}>{label}</label>
      </div>
    </>
  );
};

export default InputField;
