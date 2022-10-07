import React from "react";
import styles from "./Button.module.css";
export default function Button({ children, variant, ...others }) {
  return (
    <button
      {...others}
      className={styles.buttonContainer + " " + styles[variant]}
    >
      {children}
    </button>
  );
}
