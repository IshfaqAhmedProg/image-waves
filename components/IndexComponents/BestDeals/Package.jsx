import React from "react";
import styles from "./BestDeals.module.css";
import Button from "../../Button/Button";
import Image from "next/image";
const Package = ({ title, contents, features, price, goto, buttontext }) => {
  console.log(contents);
  return (
    <div
      className={styles.package}
      data-aos="fade-left"
      data-aos-delay={100 * (parseInt(title) - 1)}
      data-aos-anchor-placement="top-center"
    >
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
                <Image src={"/Icons/" + feature[0]} layout="fill" />
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
