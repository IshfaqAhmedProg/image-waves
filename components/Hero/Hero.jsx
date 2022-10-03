import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import img from '../../public/SplashScreen.png'
export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.heroBody}>
        <h1 className={styles.heroTitle}>
          Imagethetics is your <br/> Online
          <span className="textHL"> Photo Editing</span><br/>  Studio!
        </h1>
        <p className={styles.heroText}>
          Upload your images to get instant service from some of the best in the
          industry! Whatever you require, we`ve got it!
        </p>
      </div>
      <div className={styles.heroBg}>
        <Image src={img} alt="/" /* width="680px" height="712px" */ layout="fixed" />
      </div>
    </div>
  );
}
