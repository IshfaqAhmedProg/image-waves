import React from "react";
import styles from "./ProgressBar.module.css";
const ProgressBar = ({ value }) => {
  return (
    <div className={styles.container}>
      <div className={styles.progressbarcontainer}>
        <div
          className={styles.progressbarcomplete}
          style={{ width: `${Math.ceil(value)}%` }}
        >
          <div className={styles.progressbarliquid}></div>
        </div>
        <span className={styles.progress}>{Math.ceil(value)}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
