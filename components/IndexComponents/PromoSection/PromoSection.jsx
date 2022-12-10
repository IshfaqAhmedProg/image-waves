import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "./PromoSection.module.css";
import Divider from "../../Divider/Divider";
import SFDicon from "../../../public/Icons/SFDicon.svg";
import CSicon from "../../../public/Icons/CSicon.svg";
import CSaicon from "../../../public/Icons/CSaicon.svg";
import AFicon from "../../../public/Icons/AFicon.svg";
import { CountUp } from "countup.js";

const PromoSection = () => {
  useEffect(() => {
    let counter = new CountUp("count", 50000, { enableScrollSpy: true });
    if (!counter.error) {
      counter.start();
    } else {
      console.log("counter", counter.error);
    }
    return () => {
      counter.reset();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>
          Over&nbsp;
          <span id="count">0</span>
          &nbsp;images
        </h2>
        <h2>processed every day!</h2>
      </div>
      <Divider direction="horizontal" />
      <div className={styles.contentcontainer}>
        <div className={styles.content} data-aos="fade-left">
          <div className={styles.contentimage}>
            <Image src={SFDicon} alt="Super Fast Delivery" />
          </div>
          <div className={styles.contenttitle}>
            <h3>
              24hrs <br /> Super Fast Delivery
            </h3>
          </div>
          <div className={styles.contentdesc}>
            Get your images back in as little as 24 hours, even if you have
            thousands of shots to get through
          </div>
        </div>
        <div
          className={styles.content}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className={styles.contentimage}>
            <Image src={CSicon} alt="24/7 Client Support" />
          </div>
          <div className={styles.contenttitle}>
            <h3>
              24/7 <br /> Client Support
            </h3>
          </div>
          <div className={styles.contentdesc}>
            Your dedicated customer support team is ready to help, whenever you
            need us
          </div>
        </div>
        <div
          className={styles.content}
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className={styles.contentimage}>
            <Image src={CSaicon} alt="100% Client Satisfaction" />
          </div>
          <div className={styles.contenttitle}>
            <h3>
              100% <br /> Client Satisfaction
            </h3>
          </div>
          <div className={styles.contentdesc}>
            Our designers can handle even the most complex cutouts — no straight
            polygonal lasso lines where they shouldn’t be
          </div>
        </div>
        <div
          className={styles.content}
          data-aos="fade-right"
          data-aos-delay="0"
        >
          <div className={styles.contentimage}>
            <Image src={AFicon} alt="Any Kind of Instruction" />
          </div>
          <div className={styles.contenttitle}>
            <h3>
              Any <br /> Kind of Instruction
            </h3>
          </div>
          <div className={styles.contentdesc}>
            Every edit is done by a professional retoucher, not a machine, for
            complete control and the cleanest edges
          </div>
        </div>
      </div>
      <div className={styles.title}>
        <h2 data-aos="fade-down">All our</h2>
        <h1 data-aos="fade-down" data-aos-delay="200">
          Services
        </h1>
      </div>
    </div>
  );
};

export default PromoSection;
