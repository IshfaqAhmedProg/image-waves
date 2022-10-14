import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import CompareImageSlider from "../CompareImageSlider/CompareImageSlider";
import styles from "./ServicesCarousel.module.css";

//TODO Design the card
//TODO Add Props
//TODO image comparison component
const ServicesCard = ({beforeImageLink,afterImageLink,serviceName,pricing,details}) => {
  return (
    <div className={styles.cardcontainer}>
      {console.log(serviceName)}
      <div className={styles.cardimage}> <CompareImageSlider
              beforeImg={
                <Image
                  src={"/" + beforeImageLink}
                  layout="fill"
                  objectFit="cover"
                />
              }
              afterImg={
                <Image
                  src={"/" + afterImageLink}
                  layout="fill"
                  objectFit="cover"
                />
              }
            /></div>
      <div className={styles.carddetails}>
        <div className={styles.cardtitle}>{serviceName}</div>
        <div className={styles.cardprice}>
          <h3>Starting at {pricing}$ /per image</h3>
        </div>
        <div className={styles.carddesc}>
          <p>
            {details}
          </p>
        </div>
      </div>
      <div className={styles.cardsubmit}>
        <Button variant="primary">Order Now</Button>
        <Link href="/">Details</Link>
      </div>
    </div>
  );
};

export default ServicesCard;
