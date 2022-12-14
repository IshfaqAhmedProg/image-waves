import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoFull from "../../public/Logos/LogoFull.svg";
import AmexLogo from "../../public/Logos/PaymentMethod/Amex.png";
import MaestroLogo from "../../public/Logos/PaymentMethod/Maestro.png";
import MastercardLogo from "../../public/Logos/PaymentMethod/Mastercard.png";
import PayPalLogo from "../../public/Logos/PaymentMethod/PayPal.png";
import VisaLogo from "../../public/Logos/PaymentMethod/Visa.png";
import BankTransferLogo from "../../public/Logos/PaymentMethod/BankTransfer.png";
import FacebookLogo from "../../public/Logos/Socials/Facebook.svg";
import PinterestLogo from "../../public/Logos/Socials/Pinterest.svg";
import LinkedInLogo from "../../public/Logos/Socials/LinkedIn.svg";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <Image src={LogoFull} alt="We Understand your image aesthetics" />
      </div>
      <div className={styles.menu}>
        <Link href="/">Services</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Contact Us</Link>
        <Link href="/">Career</Link>
      </div>
      <div className={styles.content}>
        <div className={styles.menu + " " + styles.services}>
          <h4>Services We Provide</h4>
          <Link href="/">Glamour Retouching</Link>
          <Link href="/">Background Removal</Link>
          <Link href="/">Photo Post Production</Link>
          <Link href="/">Portrait Retouching</Link>
          <Link href="/">Photo Correction</Link>
          <Link href="/">Wedding Photo Editing</Link>
          <Link href="/">and More..</Link>
        </div>
        <div className={styles.menu + " " + styles.address}>
          <h4>Contact Us</h4>
          <p>
            <span>Email us at:</span> imagewaves5@gmail.com
            <br /> <span>Phone Number</span>
            <br /> 01765-182126
          </p>
          <div className={styles.socials}>
            <Link
              href="https://www.facebook.com/photo/?fbid=111723115101488&set=a.111723645101435"
              passHref={true}
            >
              <a>
                <Image src={FacebookLogo} alt="contact us on facebook" />
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/in/image-waves-663b08258/"
              passHref={true}
            >
              <a>
                <Image src={LinkedInLogo} alt="contact us on Linked In" />
              </a>
            </Link>
            <Link href="https://www.pinterest.com/imagewaves5/" passHref={true}>
              <a>
                <Image src={PinterestLogo} alt="contact us on Pinterest" />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.menu + " " + styles.payment}>
          <h4>We Accept</h4>
          <div className={styles.options}>
            <Image src={VisaLogo} alt="We Accept Visa" />
            <Image src={MastercardLogo} alt="We Accept Mastercard" />
            <Image src={MaestroLogo} alt="We Accept Maestro" />
            <Image src={AmexLogo} alt="We Accept Amex" />
            <Image src={PayPalLogo} alt="We Accept PayPal" />
            <Image src={BankTransferLogo} alt="We Accept Bank Transfer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
