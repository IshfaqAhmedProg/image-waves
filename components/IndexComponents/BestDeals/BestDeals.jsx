import React from "react";
import styles from "./BestDeals.module.css";
import Divider from "../../Divider/Divider";
import Package from "./Package";
const BestDeals = () => {
  return (
    <div className={styles.container}>
      <Divider direction="horizontal" />
      <div className={styles.title}>
        <h1 data-aos="zoom-in-down">Get the Best Deals</h1>
        <h1 data-aos="zoom-in-right" data-aos-delay="300">
          Today!
        </h1>
      </div>
      <div className={styles.packages}>
        <Package
          title="1"
          contents={[
            "Clipping Path",
            "Basic Retouch",
            "Shadow",
            "Image Resize",
            "Background Removal",
          ]}
          features={[
            ["SDDicon.svg", "Same Day Delivery"],
            ["CSaicon.svg", "100% Client Satisfaction"],
            ["FreeTrialicon.svg", "Free Trial"],
          ]}
          price="225"
          buttontext="Try for Free Now!"
          bestDeal
        />
        <Package
          title="2"
          contents={[
            "Basic Retouch",
            "Model Masking",
            "Image Resize",
            "Background Removal",
          ]}
          features={[
            ["CSaicon.svg", "100% Client Satisfaction"],
            ["FreeTrialicon.svg", "Free Trial"],
          ]}
          price="250"
          buttontext="Order Now!"
        />
        <Package
          title="3"
          contents={["Basic Retouch", "Image Resize", "Background Removal"]}
          features={[
            ["CSaicon.svg", "100% Client Satisfaction"],
            ["FreeTrialicon.svg", "Free Trial"],
          ]}
          price="200"
          buttontext="Order Now!"
        />
        <Package
          title="4"
          contents={["Drop Shadow", "Image Resize", "Background Removal"]}
          features={[
            ["CSaicon.svg", "100% Client Satisfaction"],
            ["FreeTrialicon.svg", "Free Trial"],
          ]}
          price="125"
          buttontext="Order Now!"
        />
      </div>
    </div>
  );
};

export default BestDeals;
