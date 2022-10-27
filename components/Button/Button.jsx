import React, { useEffect, useRef } from "react";
import styles from "./Button.module.css";
export default function Button({ children, variant, alternate, ...others }) {
  const coloredPrimary = useRef();
  const variantBlue = [
    ["--text", "var(--white)"],
    ["--hover-text", "var(--primary--light)"],
    ["--active-text", "var(--primary)"],
    ["--bg-color-before", "var(--primary--light)"],
    ["--bg-color-after", "var(--primary--lighter)"],
    ["--hover-bg-before", "var(--primary--light)"],
    ["--active-bg-before", "var(--primary)"],
  ];
  useEffect(() => {
    if (alternate != null) {
      variantBlue.forEach(element => {
        coloredPrimary.current.style.setProperty(element[0],element[1])
      });
    }
  }, []);
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
          ref={alternate != null ? coloredPrimary : null}
          {...others}
          className={styles.buttonContainer + " " + styles[variant]}
        >
          {children}
        </button>
      )}
    </>
  );
}
