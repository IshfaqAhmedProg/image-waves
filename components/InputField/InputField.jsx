import React from "react";
import styles from "./InputField.module.css";
const InputField = ({ children, id, ...other }) => {
  return (
    <div className={styles.forminputgroup}>
      <input className={styles.forminput} {...other} />
      <label htmlFor={id} className={styles.forminputlabel}>
        {children}
      </label>
    </div>
  );
};

export default InputField;
