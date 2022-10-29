import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import ServicesCard from "./ServicesCard";
import styles from "./ServicesCarousel.module.css";
import Services from "../../../shared/Data/services.json";
import Button from "../../Button/Button";
//TODO services json data from firestore
const ServicesCarousel = () => {
  return (
    <div className={styles.container}>
      <Glider
        draggable
        hasArrows
        hasDots
        arrows={{
          prev: "#buttonPrev",
          next: "#buttonNext",
        }}
        responsive={[
          {
            breakpoint: 1490,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
        slidesToShow={1}
        slidesToScroll={1}
        scrollLock={true}
      >
        {Services.map((service) => {
          return (
            <div key={service.ID} data-aos="zoom-out">
              <ServicesCard
                beforeImageLink={service.BeforeImageLink}
                afterImageLink={service.AfterImageLink}
                serviceName={service.ServiceName}
                pricing={service.Pricing}
                details={service.Details}
              />
            </div>
          );
        })}
      </Glider>
      <div className={styles.arrows}>
        <div className={styles.arrow}>
          <Button id="buttonPrev" variant="leftarrow" />
        </div>
        <div className={styles.arrow}>
          <Button id="buttonNext" variant="rightarrow" />
        </div>
      </div>
      <style jsx>{`
        .glider-prev {
          top: 50%;
          width: 50px;
        }
        .glider-next {
          top: 50%;
          width: 50px;
        }

        .glider-prev {
          left: 50px;
          z-index: 5;
        }

        .glider-next {
          right: 50px;
        }
        .glider-wrap {
          position: relative;
          overflow: hidden;
        }
        .glider {
          scrollbar-width: none;
        }
        .glider ::-webkit-scrollbar {
          display: none;
        }
        .glider-contain {
          margin-bottom: 25px;
        }
        .glider-dots {
          margin-top: 15px;
        }
        .glider-track {
          height: 100%;
        }
        .glider-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-inline: 1rem;
          margin-block: 1.5rem;
        }
        .glider-draggable {
          overflow: hidden;
        }
        .glider-dot .active {
          background: #31b624;
        }
      `}</style>
    </div>
  );
};

export default ServicesCarousel;
