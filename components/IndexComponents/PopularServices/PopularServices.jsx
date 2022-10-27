import React, { useEffect, useState } from "react";
import styles from "./PopularServices.module.css";
import Image from "next/image";
//const LineDrawer = React.lazy(() => import("../LineDrawer/LineDrawer"));
import LineDrawer from "../../LineDrawer/LineDrawer";
import Services from "../../../shared/Data/services.json";
import CompareImageSlider from "../../CompareImageSlider/CompareImageSlider";
import Button from "../../Button/Button";
const PopularServices = () => {
  const [service, setService] = useState({});
  const [active, setActive] = useState(0);
  useEffect(() => {
    setService({
      name: Services[active].ServiceName,
      details: Services[active].Details,
      beforeImg: Services[active].BeforeImageLink[0],
      beforeAlt: Services[active].BeforeImageLink[1],
      afterImg: Services[active].AfterImageLink[0],
      afterAlt: Services[active].AfterImageLink[1],
    });
  }, [active]);

  return (
    <div className={styles.container}>
      <div className={styles.textbg}></div>
      <div className={styles.textcontent}>
        <div className={styles.title}>
          <h2 data-aos="fade-right" data-aos-delay="600">
            Our Most
          </h2>
          <h1 data-aos="fade-right" data-aos-delay="900">
            Popular Services
          </h1>
        </div>
        <div className={styles.preview}>
          <div className={styles.previewdesc}>
            <h2>{service.name}</h2>
            <p>{service.details}</p>
          </div>
          <div
            className={styles.previewarrow}
            onClick={() =>
              active != 0 ? setActive(active - 1) : setActive(active)
            }
          >
            <Button variant="leftarrow" />
          </div>
          <div className={styles.previewcomp} data-aos="zoom-in" data-aos-delay="1200">
            <CompareImageSlider
              beforeImg={
                <Image
                  alt={service.beforeAlt}
                  src={"/" + service.beforeImg}
                  layout="fill"
                  objectFit="cover"
                />
              }
              afterImg={
                <Image
                  alt={service.afterAlt}
                  src={"/" + service.afterImg}
                  layout="fill"
                  objectFit="cover"
                />
              }
            />
          </div>
          <div
            className={styles.previewarrow}
            onClick={() =>
              active === Services.length - 1
                ? setActive(active)
                : setActive(active + 1)
            }
          >
            <Button variant="rightarrow" />
          </div>
        </div>
      </div>
      <div className={styles.bg}>
        <LineDrawer
          viewBox="0 0 608 759"
          duration={2000}
          delay={0}
          stagger={300}
          id="popline"
          right={0}
          top="-35%"
          float="right"
        >
          <path
            d="M208.5 35C335.833 55.1667 546.768 98.1451 590.5 188C651.823 314 495 370 605.5 510C694.795 623.134 903 592.5 961 633"
            stroke="#5CFC4EAA"
            strokeWidth="70"
          />
          <path
            d="M84 92C193.533 109.348 354.886 139.075 428.5 205.5C440.463 216.294 456.387 236.439 462.5 249C526.5 380.5 372 470.5 523 588C571 625.351 655 662 736.5 672"
            stroke="#5CFC4E99"
            strokeWidth="51"
          />
          <path
            d="M7 140C134.333 160.167 345.268 203.145 389 293C453 424.5 296.5 468.5 407 608.5C496.295 721.634 701.5 697.5 759.5 738"
            stroke="#5CFC4E55"
            strokeWidth="26"
          />
          <path
            d="M1.5,193L123,217.953C212.35,243.238 294.531,279.669 320,332C384,463.5 227.5,507.5 338,647.5C400.955,727.262 521.522,738.794 607.5,752.85"
            stroke="#5CFC4E22"
            strokeWidth="12"
          />
        </LineDrawer>
      </div>
    </div>
  );
};

export default PopularServices;
