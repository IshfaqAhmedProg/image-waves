import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoFull from "../../public/Logos/LogoFull.png";
import AmexLogo from "../../public/Logos/PaymentMethod/Amex.png";
import MaestroLogo from "../../public/Logos/PaymentMethod/Maestro.png";
import MastercardLogo from "../../public/Logos/PaymentMethod/Mastercard.png";
import PayPalLogo from "../../public/Logos/PaymentMethod/PayPal.png";
import VisaLogo from "../../public/Logos/PaymentMethod/Visa.png";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Image src={LogoFull} alt="We Understand your image aesthetics" />
      <div className={styles.menu}>
        <Link href="/">Services</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Contact Us</Link>
        <Link href="/">Career</Link>
      </div>
      <div className={styles.content}>
        <div className={styles.menu+" "+styles.services}>
          <h4>Services We Provide</h4>
          <Link href="/">Glamour Retouching</Link>
          <Link href="/">Background Removal</Link>
          <Link href="/">Photo Post Production</Link>
          <Link href="/">Portrait Retouching</Link>
          <Link href="/">Photo Correction</Link>
          <Link href="/">Wedding Photo Editing</Link>
        </div>
        <div className={styles.menu+" "+styles.address}>
          <h4>Address</h4>
          Lorem ipsum,
          <br /> dolor sit
          <br /> 1235486 568-986
          <br /> alps
        </div>
        <div className={styles.menu+" "+styles.payment}>
          <h4>We Accept</h4>
          <div className={styles.options}>

          <Image src={VisaLogo} alt="We Accept Visa"/>
          <Image src={MastercardLogo} alt="We Accept Mastercard"/>
          <Image src={MaestroLogo} alt="We Accept Maestro"/>
          <Image src={AmexLogo} alt="We Accept Amex"/>
          <Image src={PayPalLogo} alt="We Accept PayPal"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
