import React from "react";
import styles from "./Button.module.css";
export default function Button({ children, variant, ...others }) {
  return (
    <>
      {variant == "leftarrow" || variant == "rightarrow" ? (
        <div {...others} className={styles.arrow + " " + styles[variant]}>
         
          <svg
          //Change this svg for changing arrow icon
            viewBox="0 0 32 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 42.9998L8 23.9998L27 4.99976"
              stroke="#828282"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ) : (
        <button
          {...others}
          className={styles.buttonContainer + " " + styles[variant]}
        >
          {children}
        </button>
      )}
    </>
  );
}
