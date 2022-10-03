import React from "react";
import styles from "./Button.module.css";
export default function Button({ children, variant, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.buttonContainer + " " + styles[variant]}
    >
      {children}
    </button>
  );
}
