import React from "react";
import styles from "./BestDeals.module.css";
import Button from "../../Button/Button";
import Image from "next/image";
const Package = ({
  title,
  contents,
  features,
  price,
  goto,
  buttontext,
  bestDeal,
}) => {
  return (
    <div
      className={styles.package}
      data-aos="fade-left"
      data-aos-delay={100 * (parseInt(title) - 1)}
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration={(parseInt(title) / 100) * 20000}
      data-aos-once="true"
    >
      {bestDeal ? (
        <div
          className={styles.bestbanner}
          data-aos="zoom-in-right"
          data-aos-delay="800"
        >
          Best Deal!
        </div>
      ) : (
        ""
      )}
      <h2 className={styles.packagetitle}>
        Package <span>{title}</span>
      </h2>
      <ul className={styles.packagecontent}>
        {contents.map((content) => {
          return (
            <li key={content}>
              <h4>{content}</h4>
            </li>
          );
        })}
      </ul>
      <ul className={styles.packagefeatures}>
        {features.map((feature) => {
          return (
            <li key={feature}>
              <div>
                <Image src={"/Icons/" + feature[0]} alt="feature icon" layout="fill" />
              </div>
              {feature[1]}
            </li>
          );
        })}
      </ul>
      <div className={styles.packageprice}>
        <h1>
          {price}
          <span>USD</span>
        </h1>
        <h3>/500 images</h3>
      </div>
      <div className={styles.packagebutton}>
        <Button variant="primary">{buttontext}</Button>
      </div>
    </div>
  );
};

export default Package;
