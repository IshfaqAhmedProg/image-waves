import React, { useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import BGImageTransition from "../BGImageTransition/BGImageTransition";
export default function Hero() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  return (
    <div className={styles.container}>
      <div className={styles.herotextbg}></div>
      <div className={styles.herotext}>
      <h1 className={styles.herotitle}>
          Imagethetics is your <br /> Online
          <span className="textHL"> Photo Editing</span>
          <br /> Studio!
        </h1>
        <p className={styles.herodesc}>
          Upload your images to get instant service from some of the best in the
          industry! Whatever you require, we`ve got it!
        </p>
      </div>
      <div className={styles.herobg}>

    <BGImageTransition/>
      </div>
    </div>
  );
}
