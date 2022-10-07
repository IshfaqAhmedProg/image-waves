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
      <div className={styles.heroBody}>
        <h1 className={styles.heroTitle}>
          Imagethetics is your <br /> Online
          <span className="textHL"> Photo Editing</span>
          <br /> Studio!
        </h1>
        <p className={styles.heroText}>
          Upload your images to get instant service from some of the best in the
          industry! Whatever you require, we`ve got it!
        </p>
      </div>
      <div className={styles.heroBg}>
      <BGImageTransition/>
      </div>
    
    </div>
  );
}
