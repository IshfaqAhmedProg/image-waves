import Image from "next/image";
import React from "react";
import styles from "./PromoSection.module.css";
import Divider from "../../Divider/Divider";
import SFDicon from "../../../public/Icons/SFDicon.svg";
import CSicon from "../../../public/Icons/CSicon.svg";
import CSaicon from "../../../public/Icons/CSaicon.svg";
import AFicon from "../../../public/Icons/AFicon.svg";
const PromoSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>
          Over <span>50,000</span> images <br />
          processed every day!
        </h2>
      </div>
      <Divider direction="horizontal" />
      <div className={styles.contentcontainer}>
        <div className={styles.content}>
          <div className={styles.contentimage}>
            <Image src={SFDicon} alt="Super Fast Delivery" />
          </div>
          <div className={styles.contenttitle}>
            <h3>
              24hrs <br /> Super Fast Delivery
            </h3>
          </div>
          <div className={styles.contentdesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            sit accusantium aspernatur repudiandae tempore!
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentimage}>
            <Image src={CSicon} alt="24/7 Client Support" />
          </div>
          <div className={styles.contenttitle}>
            <h3>
              24/7 <br /> Client Support
            </h3>
          </div>
          <div className={styles.contentdesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            sit accusantium aspernatur repudiandae tempore!
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentimage}>
            <Image src={CSaicon} alt="100% Client Satisfaction" />
          </div>
          <div className={styles.contenttitle}>
            <h3>
              100% <br /> Client Satisfaction
            </h3>
          </div>
          <div className={styles.contentdesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            sit accusantium aspernatur repudiandae tempore!
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentimage}>
            <Image src={AFicon} alt="Any Kind of Instruction" />
          </div>
          <div className={styles.contenttitle}>
            <h3>
              Any <br /> Kind of Instruction
            </h3>
          </div>
          <div className={styles.contentdesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            sit accusantium aspernatur repudiandae tempore!
          </div>
        </div>
      </div>
      <div className={styles.title}>
        <h2>All our</h2>
        <h1>Services</h1>
      </div>
    </div>
  );
};

export default PromoSection;
